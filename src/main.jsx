import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import Windows10 from './screens/Windows10';
import { UserProvider } from './context/user-context';

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <Windows10 />
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
