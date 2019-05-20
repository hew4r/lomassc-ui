import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/layout/AppFrame";
import ActivityActions from "../components/activities/ActivityActions";
import { Button } from '@material-ui/core';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        this.props.history.push("/areas");
    };
    
    render() {
        return (
            <div>
                <AppFrame
                    header={'Home'}
                    body={
                        <div>
                        
                        
                        </div>
                        
                    }
                />
            </div>
        
        );
    }
}

export default withRouter(HomeContainer);