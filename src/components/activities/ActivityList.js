import React from 'react';
import PropTypes from 'prop-types';
import ActivityListItem from "./ActivityListItem";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';


const ActivityList = ({ activities, urlPath }) => {
    return (
        <Paper className="areas-paper">
    
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Activity
                        </TableCell>
                        <TableCell>
                            Schedule
                        </TableCell>
                        <TableCell>
                            Edit
                        </TableCell>
                        <TableCell>
                            Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        activities.map( act =>
                            <ActivityListItem
                                key={act.id}
                                idAct={act.id}
                                descAct={act.desc}
                                editAction={'Edit'}
                                delAction={'Delete'}
                                urlPath={urlPath}
                            />)
                    
                    }
                </TableBody>
            </Table>
        </Paper>
    );
};

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
    
};

export default ActivityList;