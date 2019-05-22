import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ActivitiesContainer from "./containers/activities/ActivitiesContainer";
import ActivityContainer from "./containers/activities/ActivityContainer";
import ActivityNewContainer from "./containers/activities/ActivityNewContainer";
import AppLayoutRoute from './components/layout/AppLayoutRoute';
import AreasContainer from "./containers/areas/AreasContainer";



class App extends Component {
    
    render() {
        return (
    
            
            <Router>
                {/*<AppLayoutRoute exact path="/"  component={HomeContainer} /> */}
                <AppLayoutRoute exact path="/areas" component={AreasContainer} />
                <AppLayoutRoute exact path="/activities" component={ActivitiesContainer} />
                
                <Switch>
    
                    <Route exact path="/">
                        <Redirect to="/areas" />
                    </Route>
    
                    <AppLayoutRoute path="/activities/new" component={ActivityNewContainer}/>
                    <AppLayoutRoute path="/areas/:idArea/activities" component={props => <ActivitiesContainer idArea={props.match.params.idArea} />}/>} />
                    <AppLayoutRoute path="/areas/:idArea/activities/:idAct" component={props => <ActivityContainer idArea={props.match.params.idArea} idAct={props.match.params.idAct} />} />
                </Switch>
            </Router>

        
        );
  }
}

export default App;
