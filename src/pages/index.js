import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from '../components/organisms/Header/Header';

const HomePage = () => {
    return (
        <Page
            backgroundImage={'url(/lego_dj.jpg)'}
        >
            <Header pageTitle="Anonymous Perpetrators"/>
            <main style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}>
                <a href="https://promocards.byspotify.com/share/162ce1d96336e8c0a5d467f66e33bd208fb740f3">
                    <img
                        src="/promo_card_spotify_162ce1d96336e8c0a5d467f66e33bd208fb740f3.png"
                        style={{
                            width: '45vh',
                            height: '45vh',
                        }}
                    />
                </a>
            </main>
        </Page>
    );
};

export default HomePage;
