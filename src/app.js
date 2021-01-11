import React from 'react';
import DonationCenter from './components/donationCenter/DonationCenter';
const App = () => {
    return (
        <div className="main-app">
            <DonationCenter>
                <h1>Hello World!</h1>
                <p>Initialized Project</p>
            </DonationCenter>
        </div>
    )
};
export default App;