import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import AppFrame from "../../components/layout/AppFrame";
import ActivityEdit from "../../components/activities/ActivityEdit";
import {insertActivity} from "../../actions/activities/insertActivity";

class ActivityNewContainer extends Component {
    
    handleSubmit = values => {
        return this.props.insertActivity(values).then(r => {
            
            if (r.error) {
                throw new SubmissionError(r.payload);
            }
            
        });
    }
    
    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }
    
    handleOnBack = () => {
        this.props.history.goBack();
    }
    
    renderBody = () => {
        
        const newActivity = {
            "id": "",
            "descAct": "",
            "costPerClass": null,
            "classesPerWeek": null,
        };
        
        return <ActivityEdit {...newActivity} onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}/>
    }
    
    render() {
        
        return(
            <div>
                <AppFrame header={`New Activity`}
                          body={this.renderBody()} />
            
            </div>
        );
        
    }
}

ActivityNewContainer.propTypes = {
    insertActivity: PropTypes.func.isRequired,
};

const mapDispatchToProps = { insertActivity };

export default connect(null, mapDispatchToProps)(ActivityNewContainer);