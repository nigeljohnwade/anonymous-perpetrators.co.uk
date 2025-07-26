import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import Typography from '../components/atoms/Typography/Typography';

const HomePage = () => {
    return (
        <Page
            backgroundImage={'url(/vapor_grid.webp)'}
            backgroundPositionX={'center'}
            backgroundSize={'cover'}
        >
            <Header pageTitle="About"/>
            <div style={{
                padding: '1rem',
                backgroundColor: 'hsl(0deg 0% 24% / 78%)',
            }}
                className="longform-text"
            >
                <Typography element="p">Making electronic music since the mid nineties.</Typography>
                <Typography element="p">The name came from a speech bubble in 200AD, though not verbatim, which was <i>de rigor</i> for the time. I
                    have not read much 2000AD at all.</Typography>
                <Typography element="p">Primary software is Reason (don&apos;t &#64;me) which I absolutely love for its creative versatility.</Typography>
                <Typography element="p">Also use an Arturia Keystep as a sequencer a lot providing a link between Reason/Midi and some
                    CV/Gate/Curve hardware.</Typography>
            </div>
        </Page>
    );
};

export default HomePage;
