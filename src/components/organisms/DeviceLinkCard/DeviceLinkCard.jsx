import React from 'react';
import Image from 'next/image';
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
            <Image
                width={600}
                height={600}
                alt={device[0]}
                src={`/${device[1]}`}
                className={styles['card-image']}
            />
        </Card>
    );
};

export default DeviceLinkCard;