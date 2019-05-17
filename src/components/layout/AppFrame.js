import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "./AppHeader";
import {CssBaseline} from "@material-ui/core";

const AppFrame = ({header, body}) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <div className="app-frame">
                <AppHeader title={header}/>
                <div>{body}</div>
            </div>
        </React.Fragment>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;