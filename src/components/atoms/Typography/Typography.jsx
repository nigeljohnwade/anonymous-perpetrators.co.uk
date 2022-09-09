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
    const modifiers = Array.isArray(modifier)
        ? modifier.map(modifier => styles[`typography-${modifier}`])
        : [styles[`typography-${modifier}`]];

    return (
        <Element
            className={[
                styles['typography'],
                styles[`typography-${variant}`],
                ...modifiers,
            ].join(' ')}
            {...elementProps}
        >
            {children}
        </Element>
    );
};

export default Typography;