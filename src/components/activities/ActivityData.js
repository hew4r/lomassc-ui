import React from 'react';
import PropTypes from 'prop-types';
import ActivityActions from './ActivityActions';

const ActivityData = ({ id, idArea, desc, onBack, isDeleteAllow, onDelete }) => {
    
    return (
        
        <div>
            <div className="activity-data">
                <h2>Activity Data</h2>
                <div><strong>ID</strong><i>{id}</i></div>
                <div><strong>Activity</strong><i>{desc}</i></div>
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
    desc: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default ActivityData;
