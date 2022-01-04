import React, { lazy, Suspense, useState } from 'react';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

import Header from './components/Header';
import Progress from './components/Progress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default (() => {
    const [isSignedIn, setIsSignedIn] = useState(false); // State for if user is signed in

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
});