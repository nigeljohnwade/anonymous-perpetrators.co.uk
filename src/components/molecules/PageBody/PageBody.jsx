import React from 'react';

import styles from './PageBody.module.css';

const Card = ({
    aspect = "free",
    children,
}) => {
    return(
        <div className={styles['page-body']}>
            {children}
        </div>
    )
}

export default Card;