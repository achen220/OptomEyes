import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const domNode = document.getElementById('root');
const root = createRoot(domNode)
import App from './components/App.jsx'
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)