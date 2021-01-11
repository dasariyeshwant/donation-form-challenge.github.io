import React from 'react';
import CardContainer from '../common/cardContainer/CardContainer';
import './DonationCenter.scss';
import SnackBar from '../common/snackBar/SnackBar';
import DonationForm from './DonationForm/DonationForm';

const DonationCenter = () => {
    return (
        <CardContainer className="donation-container">
            <SnackBar className="donation-container__snack-bar">
                <p><span className="donation-container__currency"><sup>$</sup>1,250</span> still needed to fund this project</p>
            </SnackBar>
            <DonationForm/>
        </CardContainer>
    )
};
export default DonationCenter;