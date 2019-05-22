import { createSelector } from 'reselect';

export const getActivities = createSelector(
    (state, props) =>
        props.idArea ? getActivitiesByArea(state, props) :
        state.activities, activities => activities
);

export const getActivitiesByArea = (state, props) => (
    state.activities.filter(act => act.idArea === props.idArea)
)


export const getActivityByCode = createSelector(
    (state, props) => state.activities.find(act => act.id === props.idAct),
    activity => activity
);