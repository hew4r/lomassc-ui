import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActivityListItem = ({ codAct, descAct, editAction, delAction, urlPath }) => {
    return (
        <div>
            <div className="activity-list-item">
                <div className="field">
                    <Link to={`${urlPath}${codAct}`}>{descAct}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${codAct}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${codAct}`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

ActivityListItem.propTypes = {
    codAct: PropTypes.string.isRequired,
    descAct: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default ActivityListItem;