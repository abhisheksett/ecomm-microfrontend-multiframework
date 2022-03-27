import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
};

// check if app is running in dev mode
if (process.env.NODE_ENV === 'development') {
    // check if app is running in isolation
    const devRoot = document.querySelector('#_marketing-dev-root');

    // if element exists, consider we are running app in isolation
    // assuming our container doesn't have an element with id 'dev-products'
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };