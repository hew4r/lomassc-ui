import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from "./containers/HomeContainer";
import ActivitiesContainer from "./containers/ActivitiesContainer";
import ActivityContainer from "./containers/ActivityContainer";

class App extends Component {
  
  renderHome = () => <HomeContainer/>;
  
  renderActivityContainer = () => <h1>Activity Container</h1>;
  
  renderActivityListContainer = () => <h1>Activity List Container</h1>;
  
  renderActivityNewContainer = () => <h1>Activity New Container</h1>;
  
  render() {
    return (
            <Router>
                <div>
                    
                    <Route exact path="/" component={this.renderHome} />
                    <Route exact path="/activities" component={ActivitiesContainer}/>
                    <Switch>
                        <Route path="/activities/new" component={this.renderActivityNewContainer}/>
                        <Route path="/activities/:codAct" render={props => <ActivityContainer codAct={props.match.params.codAct} />} />
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
