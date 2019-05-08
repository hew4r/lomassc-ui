import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from "../components/AppFrame";
import ActivityList from "../components/ActivityList";
import ActivityActions from "../components/ActivityActions";
import { Button } from "@material-ui/core";
import { fetchActivities } from "../actions/fetchActivities";
import {getActivities} from "../selectors/activities";

class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities();
    }
    
    handleAddNew = () => {
        this.props.history.push('/activities/new');
    }
    
    renderBody = activities => (
 
        <div>
            <ActivityList
                activities={activities}
                urlPath={'activities/'}
            />
            
            <ActivityActions>
                <Button variant={"contained"} onClick={this.handleAddNew}>New Activity</Button>
            </ActivityActions>
            
        </div>
    );
    
    render() {
        
        return (
            <div>
                <AppFrame
                    header={'Activities'}
                    body={this.renderBody(this.props.activities)}
                />
            </div>
        );
    }
}

ActivitiesContainer.propTypes = {
    fetchActivities: PropTypes.func.isRequired,
    activities: PropTypes.array.isRequired,
};

ActivitiesContainer.defaultProps = {
    activities: [ ]
};

/*const mapDispatchToProps = dispatch => ({
    fetchActivities: dispatch(fetchActivities())
})*/

const mapDispatchToProps = { fetchActivities };

const mapStateToProps = state => ({
   activities: getActivities(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer));