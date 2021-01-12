import React, { useState } from 'react';
import CardContainer from '../common/cardContainer/CardContainer';
import './DonationCenter.scss';
import SnackBar from '../common/snackBar/SnackBar';
import DonationForm from './DonationForm/DonationForm';
import { formatCurrency } from '../../utils/Utils';
const DonationCenter = () => {
    const [totalDonors, setTotalDonors] = useState(11);
    const [totalAmountDonated, setTotalAmountDonated] = useState(3750);
    const totalGoal = 5000;
    const remainingAmount = totalGoal - totalAmountDonated;
    const handleDonations = (amount) => {
        console.log('the value is: ', parseInt(amount));
        setTotalAmountDonated(totalAmountDonated + parseInt(amount));
        setTotalDonors(totalDonors + 1);
    }
    return (
        <CardContainer className="donation-container">
            <SnackBar className="donation-container__snack-bar">
                { remainingAmount > 0 && (
                    <p>
                        <span className="donation-container__currency"><sup>$</sup>{formatCurrency(remainingAmount)}</span> still needed to fund this project
                    </p>

                )}
                {
                    remainingAmount <= 0 && (
                    <p>
                        Hurray! Goal Achieved. <span className="donation-container__currency"><sup>$</sup>{formatCurrency(totalAmountDonated)}</span> have been already funded
                    </p>
                )}
            </SnackBar>
            <DonationForm totalGoal={totalGoal} totalAmountDonated={totalAmountDonated} totalDonors={totalDonors} handleClick={handleDonations}/>
        </CardContainer>
    )
};
export default DonationCenter;