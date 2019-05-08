import React from 'react';
import PropTypes from 'prop-types';

const ActivityActions = ({ children }) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
};

ActivityActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ActivityActions;