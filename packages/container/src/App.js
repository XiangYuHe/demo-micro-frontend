import React, { lazy, Suspense, useState, useEffect } from 'react';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

// Need to get access to history object
// As might to redirect if not signed in can redirect to root
const history = createBrowserHistory();

export default (() => {
    const [isSignedIn, setIsSignedIn] = useState(false); // State for if user is signed in

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
        // When user signed out redirect 
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard" >
                                { !isSignedIn && <Redirect to="/" /> }
                                <DashboardLazy />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
});