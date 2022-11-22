import React from 'react';
import styles from './Page.module.css';

const Page = ({
    backgroundColor = 'hsl(0deg 0% 0%)',
    backgroundImage = null,
    backgroundSize = '100%',
    children,
}) => {

    return (
        <>
            {/*<div className={styles['sky-gradient']}>*/}
            {/*</div>*/}
            {/*<div className={styles['ground-plane']}>*/}
            {/*    <div className={styles['vapor-grid-glow']}>*/}
            {/*    </div>*/}
            {/*    <div className={styles['vapor-grid']}>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div
                className={styles.page}
                style={{
                    backgroundColor: backgroundColor,
                    backgroundImage: backgroundImage,
                    backgroundSize: backgroundSize,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: 'left',
                    backgroundPositionY: 'top',
                }}
            >
                {children}
            </div>
        </>
    );
};

export default Page;