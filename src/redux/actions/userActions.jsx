import axios from 'axios';


export const getUserDetail = (id) => {
    let url = `${API}/api/users/user/${id}`
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
    let url = `${API}/api/users/users`
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