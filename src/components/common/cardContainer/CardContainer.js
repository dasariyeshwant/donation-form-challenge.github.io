import React from 'react';

const CardContainer = ({
    className,
    children
}) => {
    return (
        <div className={`card-container ${className}`}>
            {children}
        </div>
    )
};

export default CardContainer;