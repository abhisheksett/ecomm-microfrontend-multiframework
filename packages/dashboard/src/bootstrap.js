import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// check if app is running in dev mode
if (process.env.NODE_ENV === 'development') {
    // check if app is running in isolation
    const devRoot = document.querySelector('#_dashboard-dev-root');
    // if element exists, consider we are running app in isolation
    // assuming our container doesn't have an element with id 'dev-products'
    if (devRoot) {
        // create browser history only if in isolation mode
        // else use memory history
        mount(devRoot);
    }
}

export { mount };