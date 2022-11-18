import React from 'react';
import { Outlet } from 'react-router-dom';

function MainContainer() {
    return (
        <div className="container">
            <Outlet/>
        </div>
    );
}

export default MainContainer;