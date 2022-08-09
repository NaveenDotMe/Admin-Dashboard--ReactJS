import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import GDSEButton from "../../components/common/button";

class UserReg extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <Typography variant="h4" gutterBottom component="div">
                    User Registration
                </Typography>

                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined"
                                   style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="User Name" variant="outlined"
                                   style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="City" variant="outlined" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Street" variant="outlined"
                                   style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Street No." variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" style={{width: "100%"}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Lat Value" variant="outlined"
                                   style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Long Value" variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic" label="Mobile No." variant="outlined" style={{width: "100%"}}/>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: "flex"}} justifyContent="flex-end">
                        <GDSEButton size="small" label="Clear" variant="contained" color="error"/>
                        <GDSEButton size="small" label="Save" variant="contained"/>
                    </Grid>

                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(UserReg)