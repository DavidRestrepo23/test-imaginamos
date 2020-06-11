import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getStatusById } from '../redux/actions/actions';
import Service from '../components/Service';

const ServiceContainer = (props) => {

    useEffect(() => {
        props.getStatusById(props.token);
    }, [props.getStatusById])

    return (
        <Service status={props.status} />
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.ServiceReducer.token,
        status: state.ServiceReducer.status
    };
};

const mapDispatchToProps = {
    getStatusById
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceContainer);