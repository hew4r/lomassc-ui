import { handleActions } from 'redux-actions';
import {DELETE_ACTIVITY, FETCH_ACTIVITIES, INSERT_ACTIVITY, UPDATE_ACTIVITY} from "../constants";

export const activities = handleActions({
    [FETCH_ACTIVITIES]: (state, action) => [...action.payload],
    [INSERT_ACTIVITY] : (state, action) => [...state, action.payload],
    [UPDATE_ACTIVITY] : (state, action) => {
    
        const activityPayload = action.payload;
        const { id } = activityPayload;
        
        const activities = state;
        const initialValues = [];
        
        const newActivities = activities.reduce( (acc, act) => {
        
            if (act.id === id) {
                return [...acc, activityPayload];
            } else {
                return [...acc, act]
            }

        }, initialValues )
    
        return newActivities;
    
    },
    [DELETE_ACTIVITY] : (state, action) => state.filter(act => act.id !== action.payload),
}, []);