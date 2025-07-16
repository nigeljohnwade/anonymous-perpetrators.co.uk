import React from 'react';
import styles from './Page.module.css';

const Page = ({
    backgroundAttachment = 'fixed',
    backgroundColor = 'hsl(0deg 0% 0%)',
    backgroundImage = null,
    backgroundSize = '100%',
    backgroundPositionX= 'left',
    backgroundPositionY = 'top',
    children,
}) => {

    return (
        <>
            <div
                className={styles.page}
                style={{
                    backgroundColor: backgroundColor,
                    backgroundAttachment: backgroundAttachment,
                    backgroundImage: backgroundImage,
                    backgroundSize: backgroundSize,
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: backgroundPositionX,
                    backgroundPositionY: backgroundPositionY,
                }}
            >
                {children}
            </div>
        </>
    );
};

export default Page;