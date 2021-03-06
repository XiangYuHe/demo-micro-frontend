import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    }); // If it is dev mode use browser history
    // When first navigate to the auth app there is no initial history if not set

    if (onNavigate) {
        history.listen(onNavigate); //whenever the URL change call the onNavigate function
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname}) {
            // console.log('Container just navigated');
            // Avoid infinite loop
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

// If we are in development and in isolation,
// Call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory()}); // For now empty
    }
}

// We are running through container
// We should export the mount function
export { mount };
