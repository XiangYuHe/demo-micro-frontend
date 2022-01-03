import React from 'react';

import MarketingApp from './components/MarketingApp';

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// import { mount } from 'marketing/MarketingApp';
// console.log(mount);

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default (() => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
});