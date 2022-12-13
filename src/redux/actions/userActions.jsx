import axios from 'axios';
import { Config } from '../../Config'; 
let API = Config.BaseUrl;

export const getUserDetail = (id) => {
    let url = `/api/users/user/${id}`
    return dispatch => {
       // dispatch(processing(notificationConstants.PROCESSING, true))
        return axios.get(url)
            .then(
                response => {
                   // dispatch(success(notificationConstants.SUCCESS, response))
                    return response
                },
                error => {
                   // dispatch(failure(notificationConstants.ERROR, error))
                    return error?.response
                }
            )
    }
  }

  export const getAllUser = () => {
    let url = `/api/users/users`
    return dispatch => {
        return axios.get(url)
            .then(
                response => {
                    return response
                },
                error => {
                    return error?.response
                }
            )
    }
  }