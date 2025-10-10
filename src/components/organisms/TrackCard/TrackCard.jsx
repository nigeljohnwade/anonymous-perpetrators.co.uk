import React from 'react';

import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import styles from './TrackCard.module.css';
import ReactMarkdown from 'react-markdown';
import Typography from '../../atoms/Typography/Typography';

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
                    <div className={styles.blog__footer}>
                        {
                            trackItemData.frontmatter.author &&
                            <Typography element="p">
                                Author: {trackItemData.frontmatter.author}
                            </Typography>
                        }
                        {
                            trackItemData.frontmatter.date &&
                            <Typography element="p">
                                On: {new Date(trackItemData.frontmatter.date).toLocaleDateString()}
                            </Typography>
                        }
                        {
                            trackItemData.frontmatter.category &&
                            <Typography element="p">
                                In: {trackItemData.frontmatter.category}
                            </Typography>
                        }
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default TrackCard;