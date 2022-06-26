import React from 'react';
import Typography from 'components/atoms/Typography/Typography';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles['nav']}>
            <Typography
                element="a"
                href="/"
                variant="link"
            >
                Home
            </Typography>
            <Typography
                element="a"
                href="/tracks"
                variant="link"
            >
                Tracks
            </Typography>
        </nav>
    );
};

export default Navigation;