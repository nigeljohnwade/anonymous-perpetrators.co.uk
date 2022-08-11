import React from 'react';
import styles from './index.module.css';
import Typography from 'components/atoms/Typography/Typography';
import Page from 'components/layout/Page/Page';
import Card from 'components/molecules/Card/Card';
import Header from '../../components/organisms/Header/Header';

const TracksPage = ({
    trackData,
}) => {
    return (
        <Page>
            <Header pageTitle="Tracks"/>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 'var(--gutter)',
                }}
            >
                {
                    trackData && trackData.length > 0 && trackData.map(track => {
                        return (
                            <Card key={track[2]}>
                                <Typography
                                    element="a"
                                    variant="link"
                                    modifier="card-title-link"
                                    href={`/tracks/${track[0]}`}
                                >
                                    {track[0]}
                                </Typography>
                            </Card>
                        );
                    })
                }
            < /div>
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
