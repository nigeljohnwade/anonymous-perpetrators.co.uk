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
                modifier="lowercase"
            >
                Home
            </Typography>
            <Typography
                element="a"
                href="/tracks"
                variant="link"
                modifier="lowercase"
            >
                Tracks
            </Typography>
            <Typography
                element="a"
                href="/devices"
                variant="link"
                modifier="lowercase"
            >
                Devices
            </Typography>
            <Typography
                element="a"
                href="/about"
                variant="link"
                modifier="lowercase"
            >
                About
            </Typography>
        </nav>
    );
};

export default Navigation;