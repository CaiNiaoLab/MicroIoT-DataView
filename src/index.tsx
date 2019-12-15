import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/core/lib/css/blueprint-hi-contrast.css';
// import { Button, Intent, Spinner } from "@blueprintjs/core";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
