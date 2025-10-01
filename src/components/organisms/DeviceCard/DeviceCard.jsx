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
                </div>
            </div>
        </Card>
    );
}

export default DeviceCard;