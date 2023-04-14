import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const HomePage = () => {
    return (
        <Page
            backgroundImage={'url(/vapor_grid.png)'}
            backgroundPositionX={'center'}
            backgroundSize={'cover'}
        >
            <Header pageTitle="Anonymous Perpetrators"/>
            <CardDeck additionalStyles={{'flexDirection': 'flex-end'}}>
                <a href="https://promocards.byspotify.com/share/162ce1d96336e8c0a5d467f66e33bd208fb740f3">
                    <img
                        src="/promo_card_spotify_162ce1d96336e8c0a5d467f66e33bd208fb740f3.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a href="https://soundcloud.com/anonymousperpetrators">
                    <img
                        src="/promo_card_soundcloud.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a href="https://anonymousperpetrators.bandcamp.com/music">
                    <img
                        src="/promo_cards_bandcamp.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
            </CardDeck>
        </Page>
    );
};

export default HomePage;
