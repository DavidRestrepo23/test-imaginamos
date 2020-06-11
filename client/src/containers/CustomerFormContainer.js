import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addService, getStatusById } from '../redux/actions/actions';
import Form from '../components/Form';

const CustomerFormContainer = (props) => {

    const [service, setService] = useState({
        name: null,
        email: null,
        phone: null,
        content: null,
        type_service: null,
    });

    useEffect(() => {
        props.getStatusById(props.token);
    }, [props.getStatusById])

    /**
     * Get values from inputs
     * @param {*} e 
     */
    const handleChangeForm = e => {
        e.preventDefault();
        setService({
            ...service,
            [e.target.name]: e.target.value
        });
    };

    /**
     * Submit Form
     */
    const handleSubmitForm = (e) => {
        e.preventDefault();
        props.addService(service);
    }

    return (
        <Form
            handleChangeForm={handleChangeForm}
            handleSubmitForm={handleSubmitForm}
            token={props.token}
            status={props.status}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.ServiceReducer.token,
        status: state.ServiceReducer.status
    };
};

const mapDispatchToProps = {
    addService,
    getStatusById
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFormContainer);