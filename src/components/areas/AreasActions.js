import React from 'react';
import PropTypes from 'prop-types';

const AreasActions = ({ children }) => {
    return (
        <div>
           <div>{children}</div>

        </div>
    );
};

AreasActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AreasActions;