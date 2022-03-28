import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generatedClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

const App = ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassName={generatedClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
};


export default App;