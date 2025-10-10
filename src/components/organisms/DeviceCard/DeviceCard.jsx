import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import Card from 'components/molecules/Card/Card';
import CardHeader from '../../molecules/CardHeader/CardHeader';
import styles from './DeviceCard.module.css';
import ReactMarkdown from 'react-markdown';

function DeviceCard({
    deviceItemData,
}) {
    return (
        <Card>
            <CardHeader>
                <Typography
                    element="h2"
                >
                    {deviceItemData.frontmatter.manufacturer} {deviceItemData.frontmatter.deviceName}
                </Typography>
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
                className="tk-itc-avant-garde-gothic-pro"
            >
                <div className={styles.block}>
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
                            <Typography element="p">
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
        </Card>
    );
}

export default DeviceCard;