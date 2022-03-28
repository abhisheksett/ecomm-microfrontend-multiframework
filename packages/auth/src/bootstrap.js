import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;
            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
};

// check if app is running in dev mode
if (process.env.NODE_ENV === 'development') {
    // check if app is running in isolation
    const devRoot = document.querySelector('#_auth-dev-root');

    // if element exists, consider we are running app in isolation
    // assuming our container doesn't have an element with id 'dev-products'
    if (devRoot) {
        // create browser history only if in isolation mode
        // else use memory history
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };