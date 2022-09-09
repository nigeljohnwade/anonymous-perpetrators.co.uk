import React from 'react';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import TrackLinkCard from 'components/organisms/TrackLinkCard/TrackLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';

const TracksPage = ({
    trackData,
}) => {
    return (
        <Page backgroundImage={'url(/lego_dj.jpg)'}>
            <Header pageTitle="Tracks"/>
            <div
                style={{
                    width: 'calc(100vw - (2 * var(--gutter)))',
                    overflowX: 'scroll',
                    height: '55vh',
                }}
            >
                <CardDeck>
                    {
                        trackData && trackData.length > 0 && trackData.map(track => {
                            return (
                                <TrackLinkCard
                                    key={track[0]}
                                    track={track}
                                />
                            );
                        })
                    }
                </CardDeck>
            </div>
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
