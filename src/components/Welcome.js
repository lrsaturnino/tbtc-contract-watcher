import {urls} from "../utils/urlUtils";
import {Button, Divider} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
            margin: "10px 10px 20px 10px",
            '&:hover': {
                color: '#FFF'
            }
        }
      }
    }
});

export const Welcome = () => {
    return (
        <React.Fragment>
            {
                Object.values(urls).map((url, index) => {
                    return <MuiThemeProvider theme={theme}><Button variant="contained" color="secondary" key={index} component={props => <Link to={url.path} {...props}/> }>
                        {url.name}
                    </Button></MuiThemeProvider>
                })
            }
            <Divider />
            <div className='welcome-content'>
                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <h1 class="display-4">Welcome</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <p class="lead">
                                This website was created as part of the Playing for Keeps event promoted by Keep Network. It provides the current state of 'ongoing' contracts minted on tBTC Network, it means the following states: Active, Awaiting Withdrawal, Awaiting Withdrawal Proof and Courtesy Call.  
                            </p>
                            <p class="lead">
                                Here you'll find information such as 'collateralization % of a contract' and 'time left to take action on a contract'. We're also providing a GET API Endpoint so you can create your own application on top this infrastructure.
                            </p>
                            <p class="lead">
                                I would like to thank <a href="https://twitter.com/mhluongo" target="_blank">Matt Luongo</a> and the entire <a href="https://twitter.com/keep_project" target="_blank">Keep Team</a> for providing such an active and thriving community, this project will certainly be great.
                            </p>
                            <p class="lead">We are only at the beginning of this journey.</p>
                        </div>
                    </div>
                    <Divider />
                    <div className='row'>
                        <div className="col">
                            <p class="h4">Useful links</p>
                        </div>
                    </div>                    
                    <div className='row'>
                        <div className="col">
                            <div class="list-group">
                                <a href="https://tbtc.network/" class="list-group-item list-group-item-action" target="_blank">tBTC Network Website</a>
                                <a href="https://keep.network/" class="list-group-item list-group-item-action" target="_blank">Keep Network Website</a>
                                <a href="https://discordapp.com/invite/wYezN7v" class="list-group-item list-group-item-action" target="_blank">Keep Discord Community</a>
                                <a href="https://github.com/keep-network/" class="list-group-item list-group-item-action" target="_blank">Keep Github</a>
                            </div> 
                        </div>
                    </div>
                    <Divider />
                    <div className='row'>
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">This site API Endpoints</h5>
                                    <p class="card-text"><code>&lt;GET:&gt;</code> https://us-central1-tbtc-pfk.cloudfunctions.net/app/api/contracts</p>
                                    <p class="card-text"><code>&lt;GET:&gt;</code> https://us-central1-tbtc-pfk.cloudfunctions.net/app/api/contract/<code>&lt;contract_address&gt;</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className='row'>
                        <div className="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Reach me at</h5>
                                    <p class="card-text">Any questions, suggestions, or simply if you liked the project. Reach out to me!</p>
                                    <a href="https://twitter.com/Lrsaturnino" class="card-link" target="_blank">Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
};