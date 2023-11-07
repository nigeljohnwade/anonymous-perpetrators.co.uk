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
        </Page>
    );
};

export default HomePage;
