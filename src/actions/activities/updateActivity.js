import { UPDATE_ACTIVITY } from "../../constants/index";
import { createAction } from 'redux-actions';
import {apitPut} from "../../api/activities";
import {urlActivities} from "../../api/urls";

export const updateActivity = createAction(UPDATE_ACTIVITY,
    (cod, obj) => apitPut(urlActivities, cod, obj)());