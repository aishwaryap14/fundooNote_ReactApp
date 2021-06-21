import axios from 'axios';

export function getAllNotes() {
    try {
    console.log("in get all notes: ");
    const response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',{
            
        headers: {
            // Authorization: localStorage.getItem('token')
            Authorization: 'tWmyFnTJTAw0ykaZjmIt4hhkXjxu3cXVOBi4CAB9LDvKpEFsIYKWXMBFr7Vu8LhA'
        }
    });
    return response;
} catch (error) {
    return error;
}
}