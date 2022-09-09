import React from 'react';
import styles from './Card.module.css';

const Card = ({
    aspect = "free",
    children,
}) => {
    return(
        <div className={`${styles.card} ${styles[aspect]}`}>
            {children}
        </div>
    )
}

export default Card;