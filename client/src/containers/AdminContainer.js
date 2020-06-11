import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getServices } from '../redux/actions/actions';
import Admin from '../components/Admin';

const AdminContainer = (props) => {

    useEffect(() => {
        props.getServices();
    }, [props.getServices])

    return (
        <Admin services={props.services} />
    );
}

const mapStateToProps = (state) => {

    return {
        services: state.ServiceReducer.services
    }
};

const mapDispatchToProps = {
    getServices
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);