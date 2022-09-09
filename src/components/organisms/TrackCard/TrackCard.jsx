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
                    modifier="shadow"
                >
                    {trackItemData[9]}
                </Typography>
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
            >

                {trackItemData[1].split('\\n').map(p => (
                        <Typography
                            element="p"
                        >
                            {p}
                        </Typography>
                    )
                )}
                {trackItemData[2].split('\\n').map(p => (
                        <Typography
                            element="p"
                        >
                            {p}
                        </Typography>
                    )
                )}
                <SoundCloudEmbed
                    artistLink="https://soundcloud.com/anonymousperpetrators"
                    artistName="anonymousperpetrators"
                    trackId={trackItemData[4]}
                    trackLink={trackItemData[5]}
                    trackName={trackItemData[0]}
                />
            </div>
        </Card>
    );
}

export default TrackCard;