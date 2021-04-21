import axios from 'axios'
import { API_URL_LOGIN } from 'config/configAPI'

export const LoginUser = async ({ credentials }) => {
  return axios.post(API_URL_LOGIN, credentials)
    .then(({ data }) => {
      return data
    })
    .catch(err => {
      return {
        error: err.message
      }
    })
}