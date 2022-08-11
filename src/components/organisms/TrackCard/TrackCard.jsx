import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Card from 'components/molecules/Card/Card';

function TrackCard({
    trackItemData,
}) {
    return (
        <Card>
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