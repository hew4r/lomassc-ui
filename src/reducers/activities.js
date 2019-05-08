import { handleActions } from 'redux-actions';
import { FETCH_ACTIVITIES } from "../constants";

export const activities = handleActions({
    [FETCH_ACTIVITIES]: (state, action) => [...action.payload],
}, []);