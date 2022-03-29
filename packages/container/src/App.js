import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generatedClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

const App = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const history = createBrowserHistory();

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    }, [isSignedIn])

    return (
        <StylesProvider generateClassName={generatedClassName}>
            <Router history={history}>
                <div>
                    <Header isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} onSignOut={() => setIsSignedIn(false)} />
                            </Route>
                            <Route path="/dashboard">
                                {/* {!isSignedIn && <Redirect to="/" />} */}
                                <DashboardLazy />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </StylesProvider>
    )
};

export default App;