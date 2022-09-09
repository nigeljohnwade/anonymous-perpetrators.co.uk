import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Card from 'components/molecules/Card/Card';
import CardHeader from '../../molecules/CardHeader/CardHeader';

function TrackCard({
    trackItemData,
}) {
    return (
        <Card>
            <CardHeader>
                <Typography
                    element="h2"
                    variant="h2"
                    modifier="shadow"
                >
                    {trackItemData[0]}
                </Typography>
            </CardHeader>
            <Typography
                element="p"
            >
                {trackItemData[1]}
            </Typography>
            <Typography>
                {trackItemData[2]}
            </Typography>
            <SoundCloudEmbed
                artistLink="https://soundcloud.com/anonymousperpetrators"
                artistName="anonymousperpetrators"
                trackId={trackItemData[4]}
                trackLink={trackItemData[5]}
                trackName={trackItemData[0]}
            />
        </Card>
    );
}

export default TrackCard;