import React from 'react';
import styles from './CardHeader.module.css';

const CardHeader = ({
    children,
}) => {
    return(
        <div className={styles['card-header']}>
            {children}
        </div>
    )
}

export default CardHeader;