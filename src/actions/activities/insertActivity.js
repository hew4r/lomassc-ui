import { createAction } from 'redux-actions';
import {INSERT_ACTIVITY} from "../../constants/index";
import {apiPost} from "../../api/activities";
import {urlActivities} from "../../api/urls";


export const insertActivity = createAction(INSERT_ACTIVITY,
    activity => apiPost(urlActivities, activity) ());