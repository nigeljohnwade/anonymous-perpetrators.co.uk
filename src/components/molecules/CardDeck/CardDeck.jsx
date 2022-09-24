import React from 'react';
import styles from './CardDeck.module.css';

const CardDeck = ({
    additionalStyles,
    children,
}) =>{
    return (
        <div
            style={additionalStyles}
            className={styles['card-deck']}
        >
            {children}
        </div>
    )
}

export default CardDeck