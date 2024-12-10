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

export async function getServerSideProps() {
    const deviceData = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTB6b_fWUvjJStAnbO-147rRk9qgWk6RBc0UntZLE9dHIC6ituaDErw1CKgnN7a6sqMUYIZAF7jdWiT/pub?gid=643050921&output=tsv')
        .then(response => response.text())
        .then(rawData => rawData.split('\r\n'))
        .then(data => data.map(item => item.split('\t')));
    const headerData = deviceData.splice(0, 1);

    return {
        props: {
            deviceData,
            headerData,
            revalidate: 300,
        }
    };
}
