import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Admin from './Admin';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px'
    }
}));

const Navigation = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color={props.color}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>

                    {props.id === "main" ?
                        <Link to="/admin" className={classes.link}> Admin Panel </Link>
                        :
                        null
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;