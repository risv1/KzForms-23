import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidenav from '../components/Sidenav';

const RootLayout: FC = ({}) => {
    return (
        <>
            <Sidenav />
            <Outlet />
        </>
    );
};

export default RootLayout;
