import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

import TrackCard from 'components/organisms/TrackCard/TrackCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';

const TracksPage = ({
    headerData,
    trackData,
}) => {
    const router = useRouter();
    const trackName = router.query.track;
    const trackItemData = trackData.filter(item => {
        return item[0] === trackName;
    })[0];
    const backgroundColor = trackItemData[7] !== '' ? trackItemData[7] : undefined;
    const backgroundImage = trackItemData[8] !== '' ? `url(${trackItemData[8]})` : undefined;

    return (
        <Page
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundSize={'100vh'}
        >
            <Header pageTitle={trackItemData[0]}/>
            <div
                style={{
                    flexBasis: '50%',
                }}
            >
                <TrackCard
                    key={trackItemData[3]}
                    trackItemData={trackItemData}
                />
            </div>
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
