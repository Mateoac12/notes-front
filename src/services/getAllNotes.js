import axios from 'axios'
import { API_URL_NOTES } from 'config/configAPI'

export const getAllNotes = () => {
    return axios.get(API_URL_NOTES, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || null}`
        }
    })
        .then(data => {
            console.log(data)
            return data
        })
        .catch(err => {
            console.error(err)
            const data = []
            return data
        })
}