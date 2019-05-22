import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { TableRow, TableCell } from '@material-ui/core';

const ActivityListItem = ({ idAct, descAct, editAction, delAction, urlPath }) => {
    return (
    
        <TableRow>
            <TableCell>
                <Link to={`${urlPath}${idAct}`}>{descAct}</Link>
            </TableCell>
    
            <TableCell >
                <IconButton color="primary" component="span">
                    <Link to={`${urlPath}${idAct}/activity_timetable`}><ScheduleIcon /></Link>
                </IconButton>
    
            </TableCell>
    
            <TableCell >
                <IconButton color="primary" component="span">
                    <Link to={`${urlPath}${idAct}/edit`}><EditIcon/></Link>
                </IconButton>
    
            </TableCell>
    
            <TableCell >
                <IconButton color="primary" component="span">
                    <Link to={`${urlPath}${idAct}/del`}><DeleteIcon/></Link>
                </IconButton>
            </TableCell>

        </TableRow>
   
    );
};

ActivityListItem.propTypes = {
    idAct: PropTypes.string.isRequired,
    descAct: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default ActivityListItem;