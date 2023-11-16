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
                alt={device[0]}
                className={styles['card-image']}
                src={`/${device[1]}`}
                onLoad={(e) => {
                    if (process.env.NODE_ENV === 'development') {
                        console.log(`width: ${e.target.naturalWidth}, height: ${e.target.naturalHeight}`);
                    }
                }}
                //either fill.sizes
                fill
                sizes="25vw"
                //or height/width
                // height={600}
                // width={600}
            />
        </Card>
    );
};

export default DeviceLinkCard;