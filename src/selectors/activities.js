import { createSelector } from 'reselect';

export const getActivities = state => state.activities;

export const getActivityByCode = createSelector(
    (state, props) => state.activities.find(act => act.codAct === props.codAct),
    activity => activity
);