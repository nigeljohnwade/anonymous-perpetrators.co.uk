import React from 'react';

import data from 'data/AnonymousPerpetratorsTracks.json';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import TrackLinkCard from 'components/organisms/TrackLinkCard/TrackLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const TracksPage = () => {
    return (
        <Page
            backgroundImage={'url(/vapor_grid.png)'}
            backgroundPositionX={'center'}
            backgroundSize={'cover'}
        >
            <Header pageTitle="Tracks" />
            <CardDeck>
                {
                    data && data.length > 0 && data.map(track => {
                        return (
                            <TrackLinkCard
                                key={track.Stub}
                                track={track}
                            />
                        );
                    })
                }
            </CardDeck>
        </Page>
    );
};

export default TracksPage;