import axios from 'axios'
import { API_URL_NOTES } from 'config/configAPI'

export const deleteSingleNote = ({ id }) => {
    return axios.delete(`${API_URL_NOTES}/${id}`)
        .then(({ data }) => {
            return data
        })
}