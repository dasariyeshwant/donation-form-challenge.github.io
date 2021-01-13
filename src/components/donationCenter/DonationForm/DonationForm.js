import React, { useState } from 'react';
import CardContainer from '../../common/cardContainer/CardContainer';
import './DonationForm.scss';
import { isAllNumberic } from '../../../utils/Utils';

const DonationForm = ({handleClick, totalDonors, totalAmountDonated, totalGoal}) => {

    const [formData, setFormData] = useState({
        donationAmount: '',
        hasError: false,
        isSubmitted: false,
        errorMessage: '',
        successMessage: 'Thank you very much for your donation.',
    });

    const progressBarWidth = totalAmountDonated <= totalGoal ? `${totalAmountDonated / 50}` : '100';

    const changeHandler = (event) => {
        if (isAllNumberic(event.target.value) || !event.target.value) {
            setFormData({...formData, donationAmount: event.target.value})
        }
    };

    const handleSubmit = () => {
        if (!formData.donationAmount || parseInt(formData.donationAmount) < 5) {
            setFormData({
                ...formData,
                hasError: true,
                isSubmitted: true,
                errorMessage: !formData.donationAmount ? 
                    'Please enter miminum of $5' : 'Sorry, We cannot accept donations of less than $5',
            });
        } else {
            handleClick(formData.donationAmount);
            setFormData({
                ...formData,
                hasError: false,
                donationAmount: '',
                isSubmitted: true
            });
        }
    };

    const hasError = () => {
        return formData.hasError && formData.isSubmitted;
    };

    const getInputContainerClassName = () => {
        let defaultClassName = 'donation-form__input-container';
        if (formData.hasError && formData.isSubmitted) {
            defaultClassName += ' has-error';
        } else if (!formData.hasError && formData.isSubmitted) {
            defaultClassName += ' has-success';
        }
        return defaultClassName;
    };

    return (
        <div className="donation-form">
            <CardContainer className="donation-form__card">
                <div className="donation-form__progress-bar-container">
                    <div 
                        className="donation-form__progress-bar"
                        style={{width: `${progressBarWidth}%`}}
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={progressBarWidth}
                        >
                    </div>
                </div>
                <h1 className="donation-form__header">
                    Only four days left to fund this project
                </h1>
                <p className="donation-form__description">
                    Join the <span className="donation-form__description_bold">{totalDonors}</span> other donors who have already supported this project.
                </p>
                { formData.hasError && (
                    <p className="donation-form__error" id="input-field-error-message">
                        {formData.errorMessage}
                    </p>
                )
                }
                { !formData.hasError && formData.isSubmitted && (
                    <p className="donation-form__success" id="input-field-success-message">
                        {formData.successMessage}
                    </p>
                )
                }
                <div className={getInputContainerClassName()}>
                    <div className="donation-form__input-currency-symbol">$</div>
                    <input 
                        className="donation-form_input-field"
                        aria-label="donation input field"
                        aria-invalid={hasError() ? 'true' : 'false'}
                        aria-required="true"
                        aria-describedby={hasError() ? 'input-field-error-message' : 'input-field-success-message'}
                        value={formData.donationAmount} 
                        name="donationAmountField" 
                        onChange={changeHandler}/>
                    <button 
                        type="button" 
                        className="donation-form__submit" 
                        onClick={handleSubmit}
                    >
                        Give Now
                    </button>
                </div>
            </CardContainer>
        </div>
    )
};

export default DonationForm;
