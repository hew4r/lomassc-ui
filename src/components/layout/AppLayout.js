import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { CssBaseline, Button, Drawer, Menu, MenuItem, Divider, AppBar, Toolbar, List, ListItem, ListItemText, ListItemIcon, Typography, IconButton, Grid, Paper    } from '@material-ui/core';


const AppLayout = ({ routes }) => {
    
 
    return (
    
        <div className="app-layout">
            <AppBar position="static">
                <Toolbar>
                    <NavLink to="/areas" ><Button color="inherit">Areas</Button></NavLink>
                </Toolbar>
            </AppBar>
            
            <main className="content">
                <div>
                    {routes}
                </div>
            </main>
        </div>
     
    );
};

AppLayout.propTypes = {
    routes: PropTypes.element.isRequired,
};

export default AppLayout;
