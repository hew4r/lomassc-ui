import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { activities } from './activities';

export default combineReducers({
    activities,
    form: reduxForm,
})