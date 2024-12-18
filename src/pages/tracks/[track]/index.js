import React from 'react';
import { useRouter } from 'next/router';

import data from 'data/AnonymousPerpetratorsTracks.json';
import TrackCard from 'components/organisms/TrackCard/TrackCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';

const TracksPage = () => {
    const router = useRouter();
    const trackName = router.query.track;
    const trackItemData = data.filter(item => {
        return item.Stub === trackName;
    })[0];
    const backgroundColor = trackItemData['Track Page Colour'] !== '' ? trackItemData['Track Page Colour'] : undefined;
    const backgroundImage = trackItemData['Track Page Image'] !== '' ? `url(${trackItemData['Track Page Image']})` : undefined;

    return (
        <Page
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundSize={'100vh'}
        >
            <Header pageTitle={trackItemData.Title}/>
            <div
                style={{
                    flexBasis: '50%',
                }}
            >
                <TrackCard
                    key={trackItemData.Stub}
                    trackItemData={trackItemData}
                />
            </div>
        </Page>
    );
};

export default TracksPage;
