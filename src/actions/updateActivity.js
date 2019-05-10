import { UPDATE_ACTIVITIES } from "../constants";
import { createAction } from 'redux-actions';
import {apitPut} from "../api";
import {urlActivities} from "../api/urls";

export const updateActivity = createAction(UPDATE_ACTIVITIES,
    (cod, obj) => apitPut(urlActivities, cod, obj)());