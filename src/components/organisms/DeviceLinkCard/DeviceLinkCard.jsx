import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import Typography from 'components/atoms/Typography/Typography';
import styles from './DeviceLinkCard.module.css';

const DeviceLinkCard = ({device}) => {
    return (
        <Card aspect="square">
            <CardHeader>
                <Typography
                    element="a"
                    variant="link"
                    modifier="card-title-link"
                    href={`/devices/${device[0]}`}
                >
                    {device[0]}
                </Typography>
            </CardHeader>
            <img
                src={`/${device[1]}`}
                className={styles['card-image']}
            />
        </Card>
    );
};

export default DeviceLinkCard;