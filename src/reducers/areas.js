import { handleActions } from 'redux-actions';
import {FETCH_AREAS} from "../constants";

export const areas = handleActions({

    [FETCH_AREAS]: (state, action) => [...action.payload],




}, []);