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
                {deviceItemData[0]}
            </CardHeader>
            <div
                style={{
                    padding: '1rem'
                }}
            >
                <div className={styles.block}>
                    {deviceItemData[2] && deviceItemData[2].split('\\n').map(p => (
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

export default DeviceCard;