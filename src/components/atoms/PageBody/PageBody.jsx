import React from 'react';

import styles from './PageBody.module.css';

const Card = ({
    children,
}) => {
    return(
        <div className={[
            styles['page-body'],
            'tk-itc-avant-garde-gothic-pro',
        ].join(' ')}>
            {children}
        </div>
    )
}

export default Card;