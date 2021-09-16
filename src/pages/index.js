import React from 'react';
import Typography from '../components/atoms/Typography/Typography';
import Navigation from '../components/molecules/Navigation/Navigation';
import Page from '../components/layout/Page/Page';

const HomePage = () => {
    return (
        <Page>
            <Typography
                element="h1"
                variant="h1"
                modifier="lowercase"
            >
                Anonymous Perpetrators
            </Typography>
            <Navigation/>
        </Page>
    );
};

export default HomePage;
