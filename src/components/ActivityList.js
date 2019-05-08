import React from 'react';
import PropTypes from 'prop-types';
import ActivityListItem from "./ActivityListItem";

const ActivityList = ({ activities, urlPath }) => {
    return (
        <div>
            <div className="activity-list">
            
                {
                    activities.map( act =>
                        <ActivityListItem
                            key={act.codAct}
                            codAct={act.codAct}
                            descAct={act.descAct}
                            editAction={'Edit'}
                            delAction={'Delete'}
                            urlPath={urlPath}
                        />)
                
                }
            
            </div>
        </div>
    );
};

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
    
};

export default ActivityList;