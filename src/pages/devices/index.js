import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import DeviceLinkCard from 'components/organisms/DeviceLinkCard/DeviceLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const DevicesPage = ({
    deviceData,
}) => {
    console.log(deviceData);
    return (
        <Page backgroundImage={'url(/lego_dj.jpg)'}>
            <Header pageTitle="Tracks"/>
            <div
                style={{
                    width: 'calc(100vw - (2 * var(--gutter)))',
                    overflowX: 'scroll',
                    height: '55vh',
                }}
            >
                <CardDeck>
                    {
                        deviceData && deviceData.length > 0 && deviceData.map(device => {
                            return (
                                <DeviceLinkCard
                                    key={device[0]}
                                    device={device}
                                />
                            );
                        })
                    }
                </CardDeck>
            </div>
        </Page>
    );
};

export default DevicesPage;

export async function getStaticProps() {
    const deviceData = [
        ['Moog Mavis', 'moog_mavis.png'],
        ['Roland Tb-03 Boutique', 'roland_tb03_boutique.png'],
        ['Roland Aira TB-3', 'roland_aira_tb3.png'],
        ['Arturia Microbrute', 'arturia_microbrute.png'],
    ]
    const headerData = ['Device Name'];
    return {
        props: {
            deviceData,
            headerData,
            revalidate: 300,
        }
    };
}