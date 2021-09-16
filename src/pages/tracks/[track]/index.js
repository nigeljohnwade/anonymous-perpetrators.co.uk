import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Typography from '../../../components/atoms/Typography/Typography';
import Navigation from '../../../components/molecules/Navigation/Navigation';
import Page from '../../../components/layout/Page/Page';

const TracksPage = ({
    headerData,
    trackData,
}) => {
    const router = useRouter();
    const trackName = router.query.track;
    const trackItemData = trackData.filter(item => {
        return item[0] === trackName;
    })[0];
    console.log(trackItemData[0])
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
            <Fragment key={trackItemData[3]}>
                <Typography
                    element="h2"
                    variant="h2"
                >
                    {trackItemData[0]}
                </Typography>
                <Typography
                    element="p"
                >
                    {trackItemData[1]}
                </Typography>
                <Typography>
                    {trackItemData[2]}
                </Typography>
            </Fragment>

        </Page>
    );
};

export default TracksPage;

export async function getServerSideProps() {
    const data = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTB6b_fWUvjJStAnbO-147rRk9qgWk6RBc0UntZLE9dHIC6ituaDErw1CKgnN7a6sqMUYIZAF7jdWiT/pub?gid=0&single=true&output=tsv')
        .then(response => response.text())
        .then(rawData => rawData.split('\r\n'))
        .then(data => data.map(item => item.split('\t')));
    const headerData = data.splice(0, 1);
    return {
        props: {
            trackData: data,
            headerData,
            revalidate: 300,
        }
    };
}
