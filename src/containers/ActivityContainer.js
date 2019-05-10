import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import AppFrame from "../components/AppFrame";
import ActivityEdit from "../components/ActivityEdit";
import ActivityData from "../components/ActivityData";
import { fetchActivities } from './../actions/fetchActivities';
import { updateActivity } from "../actions/updateActivity";
import {getActivityByCode} from "../selectors/activities";



class ActivityContainer extends Component {
    
    componentDidMount() {
        //Null or Undefined
        if (!this.props.activity) {
            this.props.fetchActivities();
        }
    }
    
    handleSubmit = values => {
        const { id } = values;
        //console.log(JSON.stringify(values));
        //this.props.updateActivity(id, values);
    
        //Retorna una promise, para el submitting
        return this.props.updateActivity(id, values).then( r => {
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
        });
    };
    
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
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
                    return <ActivityControl {...this.props.activity}
                                            onSubmit={this.handleSubmit}
                                            onSubmitSuccess={this.handleOnSubmitSuccess}
                                            onBack={this.handleOnBack}/>
                
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
    activity: PropTypes.object,
    fetchActivities: PropTypes.func.isRequired,
    updateActivity: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchActivities, updateActivity };

const mapStateToProps = (state, props) => ({
    activity: getActivityByCode(state, props)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityContainer));