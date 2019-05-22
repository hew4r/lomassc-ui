import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';

const AppLayout = ({ children }) => {
    
 
    return (
    
        <div className="app-layout">
            <AppBar position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
            
            <main className="content">
                <div>
                    {children}
                </div>
            </main>
        </div>
     
    );
};

AppLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AppLayout;
