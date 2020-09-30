import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core/styles/index";
import {Card, CardContent} from "@material-ui/core";
import {createMuiTheme} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import pink from '@material-ui/core/colors/pink';
import blueGrey from '@material-ui/core/colors/blueGrey';
import {DataTable} from "../DataTable/DataTable";
import {DataTableActive} from "../DataTable/DataTableActive";
import {DataTableAll} from "../DataTable/DataTableAll";
import FirebaseService from "../../services/FirebaseService";
import {Route, withRouter} from "react-router-dom";
import {urls} from "../../utils/urlUtils";
import TopBar from "./TopBar";
import {compose} from "recompose";
import {Welcome} from "../Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';


const theme = createMuiTheme({
    palette: {
        primary: cyan,
        secondary: pink,
        textPrimary: blueGrey[900],
    },
});

class App extends Component {

    state = {
        data: [],
        data1: []
    };

    componentDidMount() {
        FirebaseService.getAwating('log_bot/contracts', (dataReceived) => this.setState({data: dataReceived}))
        FirebaseService.getActive('log_bot/contracts', (dataReceived) => this.setState({dataActive: dataReceived}))
        FirebaseService.getAll('log_bot/contracts', (dataReceived) => this.setState({dataAll: dataReceived}))
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>

                    <TopBar/>

                    <Card style={{margin: '50px'}}>
                        <CardContent>
                            <Route exact path={urls.home.path} render={(props) => <Welcome {...props}/>}/>
                            <Route exact path={urls.awaiting.path} render={(props) => <DataTable {...props} data={this.state.data}/>}/>
                            <Route exact path={urls.active.path} render={(props) => <DataTableActive {...props} data={this.state.dataActive}/>}/>
                            <Route exact path={urls.all.path} render={(props) => <DataTableAll {...props} data={this.state.dataAll}/>}/>
                        </CardContent>
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default compose(
    withRouter
)(App);
