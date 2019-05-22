import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AppFrame from "../../components/layout/AppFrame";
import ActivityList from "../../components/activities/ActivityList";
import ActivityActions from "../../components/activities/ActivityActions";
import { fetchActivities } from "../../actions/activities/fetchActivities";
import { getActivities } from "../../selectors/activities";


class ActivitiesContainer extends Component {

    componentDidMount() {
        
        if (this.props.activities.length === 0) {
            this.props.fetchActivities();
        }
    }
    
    handleAddNew = () => {
        this.props.history.push('/activities/new');
    }
    
    renderBody = activities => (
 
        <div>
            <ActivityList
                activities={activities}
                urlPath={ this.props.match.url+"/" }
            />
            
            <ActivityActions>
                <Fab color="primary" aria-label="Add" >
                    <AddIcon onClick={this.handleAddNew}/>
                </Fab>
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
    idArea: PropTypes.string,
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

const mapStateToProps = ( state, props ) => ({
   activities: getActivities(state, props)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer));