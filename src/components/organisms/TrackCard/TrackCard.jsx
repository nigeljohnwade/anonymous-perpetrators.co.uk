import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Card from 'components/molecules/Card/Card';
import CardHeader from '../../molecules/CardHeader/CardHeader';
import styles from './TrackCard.module.css';

function TrackCard({
    trackItemData,
}) {
    return (
        <Card>
            <CardHeader>
                <SoundCloudEmbed
                    artistLink="https://soundcloud.com/anonymousperpetrators"
                    artistName="anonymousperpetrators"
                    trackId={trackItemData[4]}
                    trackLink={trackItemData[5]}
                    trackName={trackItemData[0]}
                />
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
            >
                <div className={styles.block}>
                    <Typography element="h3">Devices</Typography>
                    {trackItemData[1].split('\\n').map(p => (
                            <Typography
                                element={p !== 'Hardware:' && p !== 'Software:' ? 'p' : 'h4'}
                                modifier={p !== 'Hardware:' && p !== 'Software:' ? 'indent' : null}
                                key={p.toLowerCase().replace(' ', '_')}
                            >
                                {p}
                            </Typography>
                        )
                    )}
                </div>
                <div className={styles.block}>
                    {trackItemData[2].split('\\n').map(p => (
                            <Typography
                                element="p"
                            >
                                {p}
                            </Typography>
                        )
                    )}
                </div>
            </div>
        </Card>
    );
}

export default TrackCard;