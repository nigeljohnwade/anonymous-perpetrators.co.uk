import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import Typography from 'components/atoms/Typography/Typography';
import styles from './TrackLinkCard.module.css';
import Image from 'next/image';

const TrackLinkCard = ({ track }) => {
    return (
        <Card aspect="square">
            <CardHeader>
                <Typography
                    element="a"
                    variant="link"
                    modifier="card-title-link"
                    href={`/tracks/${track.Stub}`}
                >
                    {track.Title}
                </Typography>
            </CardHeader>
            <Image
                alt=""
                fill
                sizes="(min-width: 1280px) 640px, (min-width: 1920px) 960px, 480px"
                src={`${track["Track Page Image"]}`}
                className={styles['card-image']}
            />
        </Card>
    );
};

export default TrackLinkCard;