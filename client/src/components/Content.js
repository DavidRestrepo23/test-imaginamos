import React, { Fragment } from 'react';
import Navigation from './Navigation';
import Form from './Form';
import CustomerFormContainer from '../containers/CustomerFormContainer';

const Content = ({ handleChangeForm, handleSubmitForm }) => {
    return (
        <Fragment>
            <Navigation title="Support TV" color="primary" id="main" />

            <CustomerFormContainer />

        </Fragment>
    );
}

export default Content;