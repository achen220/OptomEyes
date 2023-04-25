import React from 'react';
import { createRoot } from 'react-dom/client';
const Index = () => {
    return <div>WELCOME TO REACT APP!</div>;
};
const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)