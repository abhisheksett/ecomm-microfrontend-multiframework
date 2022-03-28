import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" component={Signin} exact />
                        <Route path="/auth/signup" component={Signup} exact />
                        <Route path="/" component={Signin} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};