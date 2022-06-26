import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import Navigation from 'components/molecules/Navigation/Navigation';
import Page from 'components/layout/Page/Page';
import Card from 'components/molecules/Card/Card';

const TracksPage = ({
    trackData,
}) => {
    return (
        <Page>
            <Typography
                element="h1"
                variant="h1"
                modifier="lowercase"
            >
                Tracks
            </Typography>
            <Navigation/>
            {
                trackData && trackData.length > 0 && trackData.map(track => {
                    return (
                        <Card key={track[2]}>
                            <a href={`/tracks/${track[0]}`}>
                                <Typography
                                    element="h2"
                                    variant="h2"
                                >
                                    {track[0]}
                                </Typography>
                                <Typography
                                    element="p"
                                >
                                    {track[1]}
                                </Typography>
                                <Typography>
                                    {track[2]}
                                </Typography>
                            </a>
                        </Card>
                    );
                })
            }
        </Page>
    );
};

export default TracksPage;

export async function getStaticProps() {
    const trackData = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTB6b_fWUvjJStAnbO-147rRk9qgWk6RBc0UntZLE9dHIC6ituaDErw1CKgnN7a6sqMUYIZAF7jdWiT/pub?gid=0&single=true&output=tsv')
        .then(response => response.text())
        .then(rawData => rawData.split('\r\n'))
        .then(data => data.map(item => item.split('\t')));
    const headerData = trackData.splice(0, 1);
    return {
        props: {
            trackData,
            headerData,
            revalidate: 300,
        }
    };
}
