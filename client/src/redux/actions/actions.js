import { ADD_SERVICE, GET_SERVICES, GET_STATUS } from './actionTypes';
import clientAxios from '../../config/axios';

/**
 * Get all service
 * @param {*} service 
 */
export function getServices() {
    return async (dispatch) => {
        await clientAxios.get('/api/services').then(response => {

            dispatch({
                type: GET_SERVICES,
                payload: response.data.services
            });
        }).catch(error => {
            console.log(error)
        });
    }
}

/**
 * Create service
 * @param {*} service 
 */
export function addService(service) {
    return async (dispatch) => {
        await clientAxios.post('/api/services', service).then(response => {
            dispatch({
                type: ADD_SERVICE,
                payload: response.data
            });
        }).catch(error => {
            console.log(error)
        });
    }
}

/**
 * Get service by id
 * @param {*} service 
 */
export function getStatusById(service_id) {
    return async (dispatch) => {
        await clientAxios.get('/api/services', { params: { service_id } }).then(response => {
            dispatch({
                type: GET_STATUS,
                payload: response.data.services[0].status
            });
        }).catch(error => {
            console.log(error)
        });
    }
}