import axios from 'axios';

export function getAllNotes() {
    try {
    console.log("in get all notes: ");
    const response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',{
            
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