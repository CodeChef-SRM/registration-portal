import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlertState from './context/Alert/AlertState';
import LoadingState from './context/Loading/LoadingState';


ReactDOM.render(
    <React.StrictMode>
        <AlertState>
            <LoadingState>
                <App />
            </LoadingState>
        </AlertState>
    </React.StrictMode>,
    document.getElementById('root')
);
