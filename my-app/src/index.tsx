import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home, { contactLoader } from './Layouts/Home';
import ContactValues from './constants/ContactValues';
import './index.css';
import NewComponent, { action as addData } from './components/NewComponent';
import RootLayout from './Layouts/RootLayout';
import EditComponent from './components/EditComponent';

export interface AppProps {}

let ContactValuesItem = new ContactValues();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/contacts/list',
                element: <Home item={ContactValuesItem} />,
                loader: contactLoader
            },
            {
                path: '/contacts/new',
                element: <NewComponent />,
                action: addData
            },
            {
                path: '/contacts/edit/:id',
                element: <EditComponent />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
