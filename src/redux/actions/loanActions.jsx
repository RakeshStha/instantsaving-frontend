import axios from 'axios';


export const getUserLoan = (id) => {
    let url = `/api/users/loan/${id}`
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