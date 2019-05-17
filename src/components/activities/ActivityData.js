import React from 'react';
import PropTypes from 'prop-types';
import ActivityActions from './ActivityActions';

const ActivityData = ({ id, descAct, costPerClass, classesPerWeek, onBack, isDeleteAllow, onDelete }) => {
    
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
                
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Delete</button>}
                
            </ActivityActions>
        </div>
        
    );
    
};

ActivityData.propTypes = {
    id: PropTypes.string.isRequired,
    descAct: PropTypes.string.isRequired,
    costPerClass: PropTypes.number.isRequired,
    classesPerWeek: PropTypes.number.isRequired,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default ActivityData;
