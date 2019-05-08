import {FETCH_ACTIVITIES} from "../constants";
import { createAction } from 'redux-actions';
import {apiGet} from "../api/apiGet";
import {urlActivities} from "../api/urls";

export const fetchActivities = createAction(FETCH_ACTIVITIES, apiGet(urlActivities));