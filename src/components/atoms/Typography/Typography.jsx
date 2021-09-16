import React from 'react';
import styles from './Typography.module.css';

const Typography = ({
    children,
    element = 'span',
    modifier = null,
    variant = 'body',
    ...elementProps
}) => {
    const Element = element;

    return (
        <Element
            className={[
                styles['typography'],
                styles[`typography-${variant}`],
                (modifier ? styles[`typography-${modifier}`] : ''),
            ].join(' ')}
            {...elementProps}
        >
            {children}
        </Element>
    );
};

export default Typography;