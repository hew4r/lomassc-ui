import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import {setPropsAsInitial} from "../hocs";
import ActivityActions from "./ActivityActions";

const isNumber = value => (
    isNaN(Number(value)) && "Este campo no es numerico"
);

/*
const isRequired = value => (
    !value && "Este campo es requerido"
);*/

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const validate = values => {
    const error = {};
    
    if (!values.descAct) {
        error.descAct = "El campo Desc Act es requerido";
    }
    
    if (!values.costPerClass) {
        error.costPerClass = "El campo Cost p/Class es requerido";
    }
    
    if (!values.classesPerWeek) {
        error.classesPerWeek = "El campo Classes p/Week es requerido";
    }

    return error;
};

const ActivityEdit = ({ descAct, costPerClass, classesPerWeek, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Activity Edition</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="descAct"
                        label={"Desc. Act."}
                        component={MyField}/>
                </div>
                <div>
                    <Field
                        name="costPerClass"
                        label={"Cost p/class"}
                        component={MyField}
                        type="number"
                        validate={isNumber}/>
                </div>
                <div>
                    <Field
                        name="classesPerWeek"
                        label={"Classes p/week"}
                        component={MyField}
                        type="number"
                        validate={isNumber}/>
                </div>
                <ActivityActions>
                    <button type="submit" disabled={submitting}>Accept</button>
                    <button onClick={onBack}>Cancel</button>
                </ActivityActions>
            </form>
            
            
            <h3>{descAct} / {costPerClass} / {classesPerWeek} </h3>
        </div>
    );
};

ActivityEdit.propTypes = {
    descAct: PropTypes.string,
    costPerClass: PropTypes.number,
    classesPerWeek: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const ActivityEditForm = reduxForm({
    form: 'ActivityEdit',
    validate
})(ActivityEdit);

export default setPropsAsInitial(ActivityEditForm);