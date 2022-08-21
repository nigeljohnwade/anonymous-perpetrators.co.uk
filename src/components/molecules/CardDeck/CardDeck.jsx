import React from 'react';
import styles from './CardDeck.module.css';

const CardDeck = ({children}) =>{
    return (
        <div className={styles['card-deck']}>
            {children}
        </div>
    )
}

export default CardDeck