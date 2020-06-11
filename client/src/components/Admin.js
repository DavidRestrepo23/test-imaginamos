import React, { Fragment } from 'react';
import Navigation from './Navigation';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import RequestsServicesTable from './RequestsServicesTable';

const Admin = props => {
    return (
        <Fragment>
            <Navigation title="Admin Panel" color="secondary" />
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <RequestsServicesTable services={props.services} />
            </Container>
        </Fragment>
    );
}

export default Admin;