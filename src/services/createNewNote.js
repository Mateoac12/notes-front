import axios from 'axios'
import { API_URL_NOTES } from 'config/configAPI'

export const createNewNote = ({ newNote }) => {
    return axios.post(API_URL_NOTES, newNote)
        .then(({ data }) => data)
}