import { FETCH_ACTIVITIES } from "../../constants";
import { createAction } from 'redux-actions';
import { apiGet } from "../../api/activities";
import {urlActivities} from "../../api/urls";

export const fetchActivities = createAction(FETCH_ACTIVITIES, apiGet(urlActivities));