import React from 'react';
import PropTypes from 'prop-types';
import ActivityActions from './ActivityActions';

const ActivityData = ({descAct, costPerClass, classesPerWeek, onBack}) => {
    
    return (
        
        <div>
            <div className="activity-data">
                <h2>Activity Data</h2>
                <div><strong>Activity</strong><i>{descAct}</i></div>
                <div><strong>Cost per class</strong><i>{costPerClass}</i></div>
                <div><strong>Qty classes per week</strong><i>{classesPerWeek}</i></div>
            </div>
            <ActivityActions>
                <button onClick={onBack}>Go Back</button>
            </ActivityActions>
        </div>
        
    );
    
};

ActivityData.propTypes = {
    descAct: PropTypes.string.isRequired,
    costPerClas: PropTypes.number.isRequired,
    classesPerWeek: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default ActivityData;
