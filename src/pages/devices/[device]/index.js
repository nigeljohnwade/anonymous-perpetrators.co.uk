import React from 'react';
import { useRouter } from 'next/router';

import data from 'data/AnonymousPerpetratorsDevices.json';
import DeviceCard from 'components/organisms/DeviceCard/DeviceCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';

const TracksPage = () => {
    const router = useRouter();
    const deviceName = router.query.device;
    const deviceItemData = data.filter(item => {
        return item['Device Stub'] === deviceName;
    })[0];
    // const backgroundColor = deviceItemData[7] !== '' ? deviceItemData[7] : undefined;
    const backgroundImage = deviceItemData['Device Main Image'] !== '' ? `url(/${deviceItemData['Device Main Image']})` : undefined;
    const backgroundColor = 'black';

    return (
        <Page
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundSize={'100vh'}
        >
            <Header pageTitle={deviceItemData['Device Name']} />
            <div
                style={{
                    flexBasis: '50%',
                }}
            >
                <DeviceCard
                    key={deviceItemData['Device Name']}
                    deviceItemData={deviceItemData}
                />
            </div>
        </Page>
    );
};

export default TracksPage;

export async function getStaticPaths() {
    const paths = data.map(item => {
        return {params: {device: item['Device Stub']}}
    });
    return {paths: paths, fallback: false};
}

export async function getStaticProps({params}) {
    const deviceItemData = data.filter(item => {
        return item['Device Stub'] === params.device;
    })[0];
    return {
        props: {
            deviceItemData: deviceItemData
        }
    };
}

