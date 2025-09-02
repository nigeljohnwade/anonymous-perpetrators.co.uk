import React from 'react';

import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import styles from './TrackCard.module.css';
import ReactMarkdown from 'react-markdown';

function TrackCard({
    trackItemData,
}) {
    return (
        <Card>
            <CardHeader>
                <SoundCloudEmbed
                    artistLink="https://soundcloud.com/anonymousperpetrators"
                    artistName="anonymousperpetrators"
                    trackId={trackItemData.frontmatter.trackId}
                    trackLink={trackItemData.frontmatter.trackLink}
                    trackName={trackItemData.frontmatter.title}
                />
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
                className="tk-itc-avant-garde-gothic-pro"
            >
                <div className={styles.block}>
                    <ReactMarkdown>
                        {trackItemData.markdownBody}
                    </ReactMarkdown>
                </div>
            </div>
        </Card>
    );
}

export default TrackCard;