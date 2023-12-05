import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import DeviceLinkCard from 'components/organisms/DeviceLinkCard/DeviceLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const DevicesPage = ({
    deviceData,
}) => {
    return (
        <Page
            backgroundImage={'url(/vapor_grid.png)'}
            backgroundPositionX={'center'}
            backgroundSize={'cover'}
        >
            <Header pageTitle="Devices"/>
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
        </Page>
    );
};

export default DevicesPage;

export async function getStaticProps() {
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
