import axios from 'axios';
import { GET_ERRORS, TRANSCATION_LOADING } from './transcationTypes';

export const createTranscation = (data) => {
    let url = `${API}/api/transcations/transcation`
    return dispatch => {
       // dispatch(processing(notificationConstants.PROCESSING, true))
        return axios.post(url, data)
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

export const getTranscationDetail = () => {
  let url = `${API}/api/transcations/transcation`
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

export const getSearchMembers = (id) => {
    let url = `${API}/api/transcations/search?page=1&limit=5&team_member=${id}`
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

export const deleteTranscation = (id) => {
    let url = `${API}/api/transcations/delete/${id}`
    return dispatch => {
       // dispatch(processing(notificationConstants.PROCESSING, true))
        return axios.delete(url)
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