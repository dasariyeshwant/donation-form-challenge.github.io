import React from 'react';
import './snackBar.scss';

const SnackBar = ({
    children,
    className
}) => {
    return (
        <div className={`snack-bar ${className}`} role="alert">
            {children}
            <div className="snack-bar__arrow-down"></div>
        </div>
    )
};
export default SnackBar;