import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { fetchAreas } from "../../actions/areas/fetchAreas";
import {getAreas} from "../../selectors/areas";
import AppFrame from "../../components/layout/AppFrame";
import AreaList from "../../components/areas/AreaList";
import AreasActions from "../../components/areas/AreasActions";

class AreasContainer extends Component {
    
    componentDidMount() {
        this.props.fetchAreas();
    }
    
    handleAddNew = () => {
    
    }
    
    renderBody = areas => (
        
        <div>
            <AreaList
                areas={areas}
                urlPath={"areas/"}
            />
            
            <AreasActions>
                <Button variant={"contained"} onClick={this.handleAddNew}>New Area</Button>
            </AreasActions>
  
        </div>
    
    );
    
    render() {
        console.log(this.props.areas);
        
        return (
            <div>
                
                <AppFrame header={"Areas"}
                          body={this.renderBody(this.props.areas)} />
            
            </div>
        );
    }
    
    
}

AreasContainer.propTypes = {
    fetchAreas: PropTypes.func.isRequired,
    areas: PropTypes.array.isRequired,
};

const mapDispatchToProps = { fetchAreas };

const mapStateToProps = state => ({
    areas: getAreas(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (AreasContainer));