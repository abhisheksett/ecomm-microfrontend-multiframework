# ecomm-microfrontend-multiframework

This is a microfrontend app which uses multiple frameworks like React and Vue for sub projects.

### Features:

The project has following main features:
- It is built with 2 frameworks, React and Vue
- Individual projects have next to zero state sharing among each other
- CI/CD pipeline is in place. Github action has been used
- Container app uses Browser history and child apps use memory history in production mode. However, in standalone mode, individual apps makes use of browser history