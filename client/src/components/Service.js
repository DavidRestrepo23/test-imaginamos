import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, CardContent, Typography, CssBaseline } from '@material-ui/core';
import Navigation from './Navigation';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Service = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Navigation title="Support TV - Seguimiento" color="primary" id="main" />
            <br /><br />
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Tu solicitud se encuentra en estado
                        </Typography>
                        <Alert severity={props.status === 'pending' ? 'warning' : 'success'} className={classes.status}>{props.status}</Alert>
                    </CardContent>
                </Card>
            </Container>
        </Fragment>

    );
}

export default Service;