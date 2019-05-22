import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@material-ui/core';

const AreaListItem = ({ id, desc, editAction, deleteAction, urlPath  }) => {
    
    return (
        
       
            
            <TableRow key={id}>
                <TableCell >
                 
                        <Link to={`${urlPath}${id}`}>
                            {desc}
                        </Link>
                </TableCell>
    
                <TableCell >
                    <IconButton color="primary" component="span">
                        <Link to={`${urlPath}${id}/activities`}><ListIcon /></Link>
                    </IconButton>
                    
                </TableCell>
                
                <TableCell >
                    <IconButton color="primary" component="span">
                        <Link to={`${urlPath}${id}/edit`}><EditIcon/></Link>
                    </IconButton>
                    
                </TableCell>
                
                <TableCell >
                    <IconButton color="primary" component="span">
                        <Link to={`${urlPath}${id}/del`}><DeleteIcon/></Link>
                    </IconButton>
                </TableCell>
                
                
            </TableRow>
            
 
      
    
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