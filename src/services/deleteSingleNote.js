import axios from 'axios'
import { API_URL } from 'config/configAPI'

export const deleteSingleNote = ({ id }) => {
    return axios.delete(`${API_URL}/${id}`)
        .then(({ data }) => {
            return data
        })
}