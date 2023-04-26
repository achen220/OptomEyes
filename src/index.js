import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const domNode = document.getElementById('root');
const root = createRoot(domNode)
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom';
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)