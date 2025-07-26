import React from 'react';

import data from 'data/AnonymousPerpetratorsDevices.json';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import DeviceLinkCard from 'components/organisms/DeviceLinkCard/DeviceLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const DevicesPage = () => {
    return (
        <Page
            backgroundImage={'url(/vapor_grid.webp)'}
            backgroundPositionX={'center'}
            backgroundSize={'cover'}
        >
            <Header pageTitle="Devices"/>
            <CardDeck>
                {
                    data && data.length > 0 && data.map(device => {
                        return (
                            <DeviceLinkCard
                                key={device['DeviceName']}
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