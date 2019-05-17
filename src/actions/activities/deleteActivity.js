import { createAction } from 'redux-actions';
import {DELETE_ACTIVITY} from "../../constants";
import {urlActivities} from "../../api/urls";
import {apiDel} from "../../api/activities";

export const deleteActivity = createAction(DELETE_ACTIVITY,
    id => apiDel(urlActivities, id) ());