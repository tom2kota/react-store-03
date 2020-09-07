import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {App} from './components/container/App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./globalStyles";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root')
);

serviceWorker.unregister();
