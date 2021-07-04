import axios from 'axios';
import NotesApiConstants from '../apiConstants/NotesApiConstants';

export function getAllNotes() {
    try {
    // console.log("in get all notes: ", process.env.REACT_APP_BASE_URL + NotesApiConstants.getAllNotes);
    const response = axios.get(process.env.REACT_APP_BASE_URL + NotesApiConstants.getAllNotes,{
            
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

export function addNotes(formData) {
    try {
        const response = axios.post(process.env.REACT_APP_BASE_URL + NotesApiConstants.addNote, formData,{
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