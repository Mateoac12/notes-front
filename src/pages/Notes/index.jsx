import React, { useEffect, useState } from 'react'
import { getAllNotes } from 'services/getAllNotes'
import { deleteSingleNote } from 'services/deleteSingleNote'
import { createNewNote } from 'services/createNewNote'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        getAllNotes()
            .then(({ data }) => {
                console.log(data)
                setNotes(data)
            })
    }, [])

    const handleDeleteNote = (id, _) => {
        deleteSingleNote({ id })
            .then(data => setNotes(data))
    }

    const handleChangeInput = (e) => {
        setValue(e.target.value)
    }

    const handleSubmitNote = (e) => {
        e.preventDefault()
        const newNote = {
            content: value
        }
        createNewNote({ newNote })
            .then(notes => {
                console.log(notes)
                setNotes(lastNotes => lastNotes.concat(notes))
            })
    }

    return <>
        <h2>Lista de notas:</h2>
        <ul>
            {
                typeof notes !== "undefined"
                    ? notes.map(note => (
                        <li key={note.id}>
                            <p>{note.content}</p>
                            <p>{note.date}</p>
                            <button>Change to {note.important ? "not important" : "important"}</button>
                            <button onClick={handleDeleteNote.bind(this, note.id)}>Borrar</button>
                        </li>
                    ))
                    : null
            }
        </ul>

        <form onSubmit={handleSubmitNote}>
            <input onChange={handleChangeInput} type="text" placeholder="Nueva nota..." value={value} />
            <button>Crear</button>
        </form>
    </>
}

export default Notes