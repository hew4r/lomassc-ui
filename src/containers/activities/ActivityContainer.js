import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import AppFrame from "../../components/layout/AppFrame";
import ActivityEdit from "../../components/activities/ActivityEdit";
import ActivityData from "../../components/activities/ActivityData";
import { fetchActivities } from '../../actions/activities/fetchActivities';
import { updateActivity } from "../../actions/activities/updateActivity";
import { deleteActivity } from "../../actions/activities/deleteActivity";
import {getActivityByCode} from "../../selectors/activities";



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
    
    handleOnDelete = id => {
        this.props.deleteActivity(id).then(v => {
            this.props.history.goBack();
        });
    };
    
    renderActivityControl = (isEdit, isDelete) => {
        //Este if se simplifica usando enableReinitialize en nuestro HOC
        //if (this.props.activity){
    
        const ActivityControl = isEdit ? ActivityEdit : ActivityData;
        return <ActivityControl {...this.props.activity}
                                onSubmit={this.handleSubmit}
                                onSubmitSuccess={this.handleOnSubmitSuccess}
                                onBack={this.handleOnBack}
                                isDeleteAllow={!!isDelete}
                                onDelete={this.handleOnDelete}/>
    
        //}
    
        //return null;
    }
    
    renderBody = () => (
    
        <Route path="/areas/:idArea/activities/:codAct/edit" children={
            ( { match: isEdit } ) => (
                   <Route path="/areas/:idArea/activities/:codAct/del" children={
                       ( { match: isDelete } ) => (
                           this.renderActivityControl(isEdit, isDelete))
                   }/> )
               }/>
               
    );
    
    render() {
        return (
            <div>
                <AppFrame
                    header={`Activity ${this.props.idAct}`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

ActivityContainer.propTypes = {
    idAct: PropTypes.string.isRequired,
    activity: PropTypes.object,
    fetchActivities: PropTypes.func.isRequired,
    updateActivity: PropTypes.func.isRequired,
    deleteActivity: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchActivities, updateActivity, deleteActivity };

const mapStateToProps = (state, props) => ({
    activity: getActivityByCode(state, props)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActivityContainer));