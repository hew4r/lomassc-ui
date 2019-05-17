import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const AreaListItem = ({ id, desc, editAction, deleteAction, urlPath  }) => {
    
    return (
        
        <div>
            
            <TableRow key={id}>
                <TableCell >
                    <Link to={`${urlPath}${id}`}>{desc}</Link>
                </TableCell>
                <TableCell >
                    <Link to={`${urlPath}${id}/edit`}>{editAction}</Link>
                </TableCell>
                <TableCell >
                    <Link to={`${urlPath}${id}/del`}>{deleteAction}</Link>
                </TableCell>
                
                
            </TableRow>
            
 
        </div>
    
    )

};

AreaListItem.propTypes = {
    
    id: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    deleteAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,

}

export default AreaListItem;