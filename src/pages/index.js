import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const HomePage = () => {
    return (
        <Page>
            <Header pageTitle="Anonymous Perpetrators"/>
            <CardDeck additionalStyles={{'flexDirection': 'flex-end'}}>
                <a
                    href="https://soundcloud.com/anonymousperpetrators"
                    target="_blank"
                >
                    <img
                        alt="Soundcloud"
                        src="/promo_card_soundcloud.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a
                    href="https://anonymousperpetrators.bandcamp.com/music"
                    target="_blank"
                >
                    <img
                        alt="Bandcamp"
                        src="/promo_card_bandcamp.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a
                    href="https://promocards.byspotify.com/api/share/7d9409a0-2f38-405f-b88c-46be5700fe2d"
                    target="_blank"
                >
                    <img
                        alt="Spotify"
                        src="/promo_card_spotify_162ce1d96336e8c0a5d467f66e33bd208fb740f3.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a
                    rel="me"
                    href="https://ravenation.club/@anonymousperpetrators"
                    target="_blank"
                >
                    <img
                        alt="Mastodon"
                        src="/promo_card_mastodon.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
                <a
                    href="https://x.com/AnonPerps"
                    target="_blank"
                >
                    <img
                        alt="X"
                        src="/promo_card_x.png"
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
