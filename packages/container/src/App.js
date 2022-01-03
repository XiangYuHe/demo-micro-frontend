import React from 'react';

import MarketingApp from './components/MarketingApp';

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

// import { mount } from 'marketing/MarketingApp';
// console.log(mount);


export default (() => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
});