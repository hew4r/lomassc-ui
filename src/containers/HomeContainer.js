import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/AppFrame";
import ActivityActions from "../components/ActivityActions";
import { Button } from '@material-ui/core';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        this.props.history.push("/activities");
    };
    
    render() {
        return (
            <div>
                <AppFrame
                    header={'Home'}
                    body={
                        <div>
                            This is the initial page
                            <ActivityActions>
                                <Button variant={"contained"} onClick={this.handleOnClick}>gym activities</Button>
                            </ActivityActions>
                            
                        </div>
                        
                    }
                />
            </div>
            
        );
    }
}

export default withRouter(HomeContainer);