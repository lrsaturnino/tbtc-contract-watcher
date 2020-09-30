import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography, Button, Divider} from "@material-ui/core";
import {urls} from "../../utils/urlUtils";
import {Link} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Links from '@material-ui/core/Link';

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

export const DataTableAll = ({data}) => {

    return <React.Fragment>
        {
            Object.values(urls).map((url, index) => {
                return <MuiThemeProvider theme={theme}><Button variant="contained" color="secondary" key={index} component={props => <Link to={url.path} {...props}/>}>
                    {url.name}
                </Button></MuiThemeProvider>
            })
        }
        <Divider />
        <Table selectable="false">
            <TableHead>
                <TableRow>
                    <TableCell align="left"><b>Contract Address</b></TableCell>
                    <TableCell align="center"><b>Block</b></TableCell>
                    <TableCell align="center"><b>Age (in days)</b></TableCell>
                    <TableCell align="center"><b>Current State</b></TableCell>
                    <TableCell align="center"><b>Collateralization %</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell align="left"><Links target="_blank" href={"https://etherscan.io/address/" + item.address}>{item.address}</Links></TableCell>
                            <TableCell align="center">{item.block}</TableCell>
                            <TableCell align="center">{item.timestamp}</TableCell>
                            <TableCell align="center">{stateTranslation(item.ac_state*1)}</TableCell>
                            <TableCell align="center">{item.collat_perc}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};


function stateTranslation(state){
    var stateString;
    switch(state) {
        case 0:
            stateString = 'Start';
            break;
        case 1:
            stateString = 'Awating Signer';
            break;
        case 2:
            stateString = 'Awating Funding';
            break;
        case 3:
            stateString = 'Failed Setup';
            break;
        case 4:
            stateString = 'Active';
            break;
        case 5:
            stateString = 'Awating Withdrawal Signature';
            break;
        case 6:
            stateString = 'Awating Signature Proof';
            break;
        case 7:
            stateString = 'Redeemed';
            break;
        case 8:
            stateString = 'Courtesy Call';
            break;
        case 9:
            stateString = 'Fraud Liquidation in Progress';
            break;
        case 10:
            stateString = 'Liquidation in Progress';
            break;
        case 11:
            stateString = 'Liquidated';
            break;
        default:
            stateString = 'Unknow State';
    }
    return stateString
};