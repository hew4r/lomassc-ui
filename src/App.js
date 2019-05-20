import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import ActivitiesContainer from "./containers/activities/ActivitiesContainer";
import ActivityContainer from "./containers/activities/ActivityContainer";
import ActivityNewContainer from "./containers/activities/ActivityNewContainer";
import {AppBar, CssBaseline, Grid, Paper, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

import AreasContainer from "./containers/areas/AreasContainer";
import AppLayout from "./components/layout/AppLayout";


class App extends Component {
    
    
    renderRouter = () => (
        <Router>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/areas" component={AreasContainer} />
            <Route exact path="/activities" component={ActivitiesContainer}/>
            <Switch>
                <Route path="/activities/new" component={ActivityNewContainer}/>
                <Route path="/activities/:codAct" render={props => <ActivityContainer codAct={props.match.params.codAct} />} />
            </Switch>
        </Router>
    )


    render() {
        return (
        
            <AppLayout
                routes={this.renderRouter()}
            />
        
        );
  }
}

export default App;
