import React from 'react';
import { useRouter } from 'next/router';

import DeviceCard from 'components/organisms/DeviceCard/DeviceCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';

const TracksPage = ({
    headerData,
    deviceData,
}) => {
    const router = useRouter();
    const deviceName = router.query.device;
    const deviceItemData = deviceData.filter(item => {
        return item[0] === deviceName;
    })[0];
    const backgroundColor = deviceItemData[7] !== '' ? deviceItemData[7] : undefined;
    const backgroundImage = deviceItemData[1] !== '' ? `url(/${deviceItemData[1]})` : undefined;

    return (
        <Page
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundSize={'100vh'}
        >
            <Header pageTitle={deviceItemData[0]}/>
            <div
                style={{
                    flexBasis: '50%',
                }}
            >
                <DeviceCard
                    key={deviceItemData[1]}
                    deviceItemData={deviceItemData}
                />
            </div>
        </Page>
    );
};

export default TracksPage;

export async function getServerSideProps() {
    const deviceData = [
        ['Moog Mavis', 'moog_mavis.png'],
        ['Roland Tb-03 Boutique', 'roland_tb03_boutique.png'],
        ['Roland Aira TB-3', 'roland_aira_tb3.png'],
        ['Arturia Microbrute', 'arturia_microbrute.png'],
    ]
    const headerData = ['Device Name', 'Device Main Image'];

    return {
        props: {
            deviceData,
            headerData,
            revalidate: 300,
        }
    };
}
