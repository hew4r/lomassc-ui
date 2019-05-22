import React from 'react';
import PropTypes from 'prop-types';
import AreaListItem from "./AreaListItem";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const AreaList = ({ areas, urlPath }) => {

    return (
     
            <Paper className="areas-paper">
                <Table className="areas-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Area</TableCell>
                            <TableCell>Activities</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            areas.map(area =>
            
                                <AreaListItem
                                    key={area.id}
                                    id={area.id}
                                    desc={area.desc}
                                    editAction={'Edit'}
                                    deleteAction={'Delete'}
                                    urlPath={urlPath}
                                />
                            )
                        }
                    </TableBody>
                
                </Table>
            </Paper>
    )
}

AreaList.propTypes = {
    areas: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default AreaList;