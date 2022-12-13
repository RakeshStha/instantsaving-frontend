import axios from 'axios';
import { Config } from '../../Config'; 
let API = Config.BaseUrl;

export const getUserLoan = (id) => {
    let url = `${API}/api/users/loan/${id}`
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