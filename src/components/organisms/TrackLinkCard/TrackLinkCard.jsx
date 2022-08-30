import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import Typography from 'components/atoms/Typography/Typography';
import styles from './TrackLinkCard.module.css';

const TrackLinkCard = ({track}) => {
    return (
        <div
            style={{
                flexBasis: '25%',
                flexShrink: '0',
            }}
        >
            <Card>
                <CardHeader>
                    <Typography
                        element="a"
                        variant="link"
                        modifier="card-title-link"
                        href={`/tracks/${track[0]}`}
                    >
                        {track[0]}
                    </Typography>
                </CardHeader>
                <img
                    src={`/${track[6]}`}
                    className={styles['card-image']}
                />
            </Card>
        </div>
    );
};

export default TrackLinkCard;