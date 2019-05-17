import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { activities } from './activities';
import { areas } from './areas';

export default combineReducers({
    areas,
    activities,
    form: reduxForm,
})