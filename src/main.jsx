import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import Windows10 from './screens/Windows10';
import { UserProvider } from './context/user-context';
import { Provider } from 'react-redux';
import store from './stores/store';

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <Provider store={store}>
                <Windows10 />
            </Provider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
