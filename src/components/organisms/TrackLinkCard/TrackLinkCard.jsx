import React from 'react';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';
import Typography from 'components/atoms/Typography/Typography';

export function TrackLinkCard({track}) {
    return <Card>
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
    </Card>;
}