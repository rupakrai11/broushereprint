import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clients from '../pages/customers';
import Customers from '../pages/customers';
import Dashboard from '../pages/dashboard/dashboard';

const CustomRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Dashboard/>}></Route>
                <Route  exact path='/clients' element={<Clients/>}></Route>
            </Routes>
        </>

    );

};

export default CustomRoute;