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
                    href={`/devices/${device['Device Stub']}`}
                >
                    {device['Device Name']}
                </Typography>
            </CardHeader>
            <Image
                alt={device['Device Name']}
                className={styles['card-image']}
                src={`/${device['Device Main Image']}`}
                onLoad={(e) => {
                    //if (process.env.NODE_ENV === 'development') {
                        console.log(`width: ${e.target.naturalWidth}, height: ${e.target.naturalHeight}`);
                    //}
                }}
                //either fill.sizes
                fill
                sizes="(min-width: 1280px) 640px, (min-width: 1920px) 960px, 480px"
                //or height/width
                // height={600}
                // width={600}
            />
        </Card>
    );
};

export default DeviceLinkCard;