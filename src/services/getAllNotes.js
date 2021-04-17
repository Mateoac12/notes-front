import axios from 'axios'
import { API_URL } from 'config/configAPI'

export const getAllNotes = () => {
    return axios.get(API_URL)
        .then(data => data)
        .catch(err => {
            console.error(err)
            const data = []
            return data
        })
}