import React from 'react';
import './CardContainer.scss';

const CardContainer = ({
    className,
    children
}) => {
    console.log('the classname is: ', className);
    return (
        <div className={`card-container ${className}`}>
            {children}
        </div>
    )
};

export default CardContainer;