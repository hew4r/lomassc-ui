import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';
import {setPropsAsInitial} from "../../hocs/index";
import ActivityActions from "./ActivityActions";
/*
const isNumber = value => (
    isNaN(Number(value)) && "Este campo no es numerico"
);


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

//const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
/*
const onlyGrow = (value, previousValue, values) =>
    value && (!previousValue ? value : (value > previousValue ? value : previousValue));
*/
const ActivityEdit = ({ descAct, costPerClass, classesPerWeek, handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
    return (
        <div>
            <h2>Activity Edition</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="descAct"
                        label={"Desc. Act."}
                        component={MyField}
                        format={toLower}
                        parse={toUpper}/>
                </div>
                
                <ActivityActions>
                    <button type="submit" disabled={pristine || submitting}>Accept</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancel</button>
                </ActivityActions>
                <Prompt when={!pristine && !submitSucceeded} //submitSucceeded cuando se envio correctamente el formulario
                        message="Se perderan los cambios si continua"/>
            </form>
            
        </div>
    );
};

ActivityEdit.propTypes = {
    descAct: PropTypes.string,
    onBack: PropTypes.func.isRequired,
};

const ActivityEditForm = reduxForm({
    form: 'ActivityEdit',
    validate
})(ActivityEdit);

export default setPropsAsInitial(ActivityEditForm);