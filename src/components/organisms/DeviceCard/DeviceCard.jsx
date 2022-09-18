import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import Card from 'components/molecules/Card/Card';
import CardHeader from '../../molecules/CardHeader/CardHeader';
import styles from './DeviceCard.module.css';

function DeviceCard({
    deviceItemData,
}) {
    return (
        <Card>
            <CardHeader>
                <Typography
                    element="h2"
                >
                    {deviceItemData[0]}
                </Typography>
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
            >
                <div className={styles.block}>
                    <Typography element="h3">Features</Typography>
                    {deviceItemData[2].split('\\n').map(p => (
                            <Typography
                                element="p"
                                modifier="indent"
                                key={p.toLowerCase().replace(' ', '_')}
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

export default DeviceCard;