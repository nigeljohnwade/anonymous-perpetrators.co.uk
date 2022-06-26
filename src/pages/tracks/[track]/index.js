import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import Typography from 'components/atoms/Typography/Typography';
import Navigation from 'components/molecules/Navigation/Navigation';
import TrackCard from 'components/organisms/TrackCard/TrackCard';
import Page from 'components/layout/Page/Page';

const TracksPage = ({
    headerData,
    trackData,
}) => {
    const router = useRouter();
    const trackName = router.query.track;
    const trackItemData = trackData.filter(item => {
        return item[0] === trackName;
    })[0];

    return (
        <Page>
            <Typography
                element="h1"
                variant="h1"
                modifier="lowercase"
            >
                {trackItemData[0]}
            </Typography>
            <Navigation/>
            <TrackCard
                key={trackItemData[3]}
                trackItemData={trackItemData}
            />

        </Page>
    );
};

export default TracksPage;

export async function getServerSideProps() {
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
