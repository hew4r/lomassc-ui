import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchActivities } from './../actions/fetchActivities';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import {getActivityByCode} from "../selectors/activities";
import ActivityEdit from "../components/ActivityEdit";
import ActivityData from "../components/ActivityData";

class ActivityContainer extends Component {
    
    componentDidMount() {
        //Null or Undefined
        if (!this.props.activity) {
            this.props.fetchActivities();
        }
    }
    
    handleSubmit = values => {
        console.log(JSON.stringify(values));
    };
    
    handleOnBack = () => {
        this.props.history.goBack();
    };
    
    renderBody = () => (
    
        <Route path="/activities/:codAct/edit" children={
            ({match}) => {
                
                //Este if se simplifica usando enableReinitialize en nuestro HOC
                //if (this.props.activity){
                    
                    const ActivityControl = match ? ActivityEdit : ActivityData;
                    return <ActivityControl {...this.props.activity} onSubmit={this.handleSubmit} onBack={this.handleOnBack}/>
                //}
                
                //return null;
                
            }
        }/>
    );
    
    render() {
        return (
            <div>
                <AppFrame
                    header={`Activity ${this.props.codAct}`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

ActivityContainer.propTypes = {
    codAct: PropTypes.string.isRequired,
    activity: PropTypes.object.isRequired,
    fetchActivities: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchActivities };

const mapStateToProps = (state, props) => ({
    activity: getActivityByCode(state, props)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityContainer));