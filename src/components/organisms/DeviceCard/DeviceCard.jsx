import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './DeviceCard.module.css';

import Typography from 'components/atoms/Typography/Typography';
import PageBody from 'components/molecules/PageBody/PageBody';

function DeviceCard({
    deviceItemData,
}) {
    return (
        <PageBody>
            <div
                style={{
                    padding: '1rem'
                }}
                className="tk-itc-avant-garde-gothic-pro"
            >
                <div className={styles.block}>
                    <h2>
                        {deviceItemData.frontmatter.manufacturer} {deviceItemData.frontmatter.deviceName}
                    </h2>
                    <ReactMarkdown>
                        {deviceItemData.markdownBody}
                    </ReactMarkdown>
                    <div className={styles.blog__footer}>
                        {
                            deviceItemData.frontmatter.author &&
                            <Typography element="p">
                                Author: {deviceItemData.frontmatter.author}
                            </Typography>
                        }
                        {
                            deviceItemData.frontmatter.date &&
                            <Typography element="p" suppressHydrationWarning>
                                On: {new Date(deviceItemData.frontmatter.date).toLocaleDateString()}
                            </Typography>
                        }
                        {
                            deviceItemData.frontmatter.category &&
                            <Typography element="p">
                                In: {deviceItemData.frontmatter.category}
                            </Typography>
                        }
                    </div>
                </div>
            </div>
        </PageBody>
    );
}

export default DeviceCard;