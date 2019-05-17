import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from "../components/layout/AppFrame";
import ActivityActions from "../components/activities/ActivityActions";
import fitin from "../static/images/fitin.png";
import nob from "../static/images/nobnatacion.png";
import { Grid, Button, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';

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
                            <ActivityActions>
                                <Grid container spacing={24} alignContent={"center"}>
                                    <Grid item xs={3} alignItems={"center"} >
                                        <Card className="home-container-card">
                                            <CardActionArea>
                                                <CardMedia className="media" component="img" image="https://bit.ly/2VEbsaa" />
                                                <CardContent className="content">
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        FitIn
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" variant={"contained"} onClick={this.handleOnClick}>
                                                    Activities
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={3} alignItems={"center"} >
                                        <Card className="home-container-card">
                                            <CardActionArea>
                                                <CardMedia className="media" component="img" image="https://bit.ly/2Wbqvro" />
                                                <CardContent className="content">
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        NOB Natacion
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary" variant={"contained"} onClick={this.handleOnClick}>
                                                    Activities
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                                
                            </ActivityActions>
                            
                        </div>
                        
                    }
                />
            </div>
            
        );
    }
}

export default withRouter(HomeContainer);