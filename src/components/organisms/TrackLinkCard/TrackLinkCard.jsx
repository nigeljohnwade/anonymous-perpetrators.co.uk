import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import Typography from 'components/atoms/Typography/Typography';
import styles from './TrackLinkCard.module.css';

const TrackLinkCard = ({track}) => {
    return (
        <Card aspect="square">
            <CardHeader>
                <Typography
                    element="a"
                    variant="link"
                    modifier="card-title-link"
                    href={`/tracks/${track[0]}`}
                >
                    {track[9]}
                </Typography>
            </CardHeader>
            <img
                src={`/${track[6]}`}
                className={styles['card-image']}
            />
        </Card>
    );
};

export default TrackLinkCard;