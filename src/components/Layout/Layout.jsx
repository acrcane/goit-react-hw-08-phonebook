import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import { AppHead } from 'components/AppHead/AppHead';


export const Layout = () => {
    return (
        <>
        <AppHead />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>

        </>
    );
};