import axios from 'axios'
import { API_URL } from 'config/configAPI'

export const createNewNote = ({ newNote }) => {
    return axios.post(API_URL, newNote)
        .then(({ data }) => data)
}