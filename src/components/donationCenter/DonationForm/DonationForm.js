import React from 'react';
import CardContainer from '../../common/cardContainer/CardContainer';
import './DonationForm.scss';

const DonationForm = () => {
    return (
        <div className="donation-form">
            <CardContainer className="donation-form__card">
                <div className="donation-form__progress-bar-container">
                    <div className="donation-form__progress-bar"></div>
                </div>
                <h1 className="donation-form__header">
                    Only four days left to fund this project
                </h1>
                <p className="donation-form__description">
                    Join the <span className="donation-form__description_bold">11</span> other donors who have already supported this project.
                </p>
                <div className="donation-form__input-container">
                    <div className="donation-form__input-currency-symbol">$</div>
                    <input className="donation-form_input-field"/>
                    <button className="donation-form__submit">Give Now</button>
                </div>
            </CardContainer>
        </div>
    )
};

export default DonationForm;
