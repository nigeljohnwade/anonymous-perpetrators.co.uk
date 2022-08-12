import React from 'react';
import styles from './Header.module.css';
import Typography from 'components/atoms/Typography/Typography';
import Navigation from 'components/molecules/Navigation/Navigation';

const Header = ({
    pageTitle
}) => {
    return (
        <header className={styles.header}>
            <Navigation/>
            <Typography
                element="h1"
                variant="h1"
                modifier="lowercase"
            >
                {pageTitle}
            </Typography>
        </header>
    );
};

export default Header;