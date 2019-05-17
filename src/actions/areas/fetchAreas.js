import { createAction } from 'redux-actions';
import {FETCH_AREAS} from "../../constants";
import { apiGet } from "../../api/areas";
import {urlAreas} from "../../api/urls";

export const fetchAreas = createAction(FETCH_AREAS, apiGet(urlAreas));