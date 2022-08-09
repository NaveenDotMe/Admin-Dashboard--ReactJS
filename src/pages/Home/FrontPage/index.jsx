import React, {Component} from "react";
import GDSEButton from "../../../components/common/button";
import {Link} from "react-router-dom";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title_container}>
                    <Typography variant="h4" gutterBottom component="div">
                        Home page
                    </Typography>
                </div>
                <div className={classes.btn_container}>
                    <Link to="login">
                        <GDSEButton
                            label="Login"
                            variant="contained"
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(HomePage)