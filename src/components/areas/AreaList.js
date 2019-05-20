import React from 'react';
import PropTypes from 'prop-types';
import AreaListItem from "./AreaListItem";
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const AreaList = ({ areas, urlPath }) => {

    return (
        <div>
    
            <Paper className="area-list-root">
            
                <Table className="list">
                    
                 
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
            
            

           
        
        </div>
        
    )
}

AreaList.propTypes = {
    areas: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default AreaList;