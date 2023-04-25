import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const Index = () => {
    return <div className='text-gray-50'>WELCOME TO REACT APP!</div>;
};
const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)