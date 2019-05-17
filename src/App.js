import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import ActivitiesContainer from "./containers/activities/ActivitiesContainer";
import ActivityContainer from "./containers/activities/ActivityContainer";
import ActivityNewContainer from "./containers/activities/ActivityNewContainer";
import {AppBar, CssBaseline, Grid, Paper, Toolbar, Typography} from "@material-ui/core";
import AreasContainer from "./containers/areas/AreasContainer";

class App extends Component {
    
    
    
    
    render() {
    
        
       
        
        return (
            <Router>
                
                <React.Fragment>
                    <CssBaseline />
    
                    <AppBar position="static" className="layout-appbar">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                LSC
                            </Typography>
                        </Toolbar>
                    </AppBar>
    
                    <main>
                        <div className="layout-main">
    
                            <Route exact path="/areas" component={AreasContainer} />
                            <Route exact path="/activities" component={ActivitiesContainer}/>
                            <Switch>
                                <Route path="/activities/new" component={ActivityNewContainer}/>
                                <Route path="/activities/:codAct" render={props => <ActivityContainer codAct={props.match.params.codAct} />} />
                            </Switch>
             
                        </div>
                    
                    </main>
    
                    <footer className="layout-footer">
                      
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            Something here to give the footer a purpose!
                        </Typography>
                    </footer>
                   

                </React.Fragment>
         
            </Router>
        );
  }
}

export default App;
