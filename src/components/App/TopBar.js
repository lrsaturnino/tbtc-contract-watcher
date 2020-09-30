import {AppBar, IconButton, Toolbar, Typography, withStyles, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Link, withRouter} from "react-router-dom";
import {compose} from "recompose";
import PropTypes from 'prop-types';
import React from "react";
import {urls} from "../../utils/urlUtils";


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
};

const TopBar = ({classes, onMenuClick}) => (
    <AppBar position="static">
        <Toolbar>
            <Typography type="title" variant="h5" color="white" className={classes.flex} style={{ color: 'white' }}>
            tBTC Contract Watcher
            </Typography>
            <Button variant="outlined" target="_blank" href="https://dapp.tbtc.network/">Mint tBTC here</Button>
        </Toolbar>
    </AppBar>
);



TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default compose(
    withStyles(styles),
    withRouter
)(TopBar);
 
