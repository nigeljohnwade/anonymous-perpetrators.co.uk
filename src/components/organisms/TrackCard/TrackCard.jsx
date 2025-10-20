import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './TrackCard.module.css';

import SoundCloudEmbed from 'components/thirdParty/SoundCloudEmbed/SoundCloudEmbed';
import Typography from 'components/atoms/Typography/Typography';
import PageBody from 'components/atoms/PageBody/PageBody';

function TrackCard({
    trackItemData,
}) {
    return (
        <PageBody>
            <SoundCloudEmbed
                artistLink="https://soundcloud.com/anonymousperpetrators"
                artistName="anonymousperpetrators"
                trackId={trackItemData.frontmatter.trackId}
                trackLink={trackItemData.frontmatter.trackLink}
                trackName={trackItemData.frontmatter.title}
            />
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
                        <Typography
                            element="p"
                            suppressHydrationWarning
                        >
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
        </PageBody>
    );
}

export default TrackCard;