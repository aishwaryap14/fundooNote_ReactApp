import axios from 'axios';
import NotesApiConstants from '../apiConstants/NotesApiConstants';

export function getAllNotes() {
    try {
    console.log("in get all notes: ", process.env.REACT_NOTE_BASE_URL + NotesApiConstants.getAllNotes);
    const response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/' + NotesApiConstants.getAllNotes,{
            
        headers: {
            // Authorization: localStorage.getItem('token')
            Authorization: localStorage.getItem('token')
        }
    });
    return response;
} catch (error) {
    return error;
}
}