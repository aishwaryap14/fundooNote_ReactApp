import React,{useState} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar, InputBase} from '@material-ui/core';
import './notesCard.scss';


    const NoteCard = () => {
        const [openCard, setOpenCard] = useState(true);

        const handleOpenNote =() => {
            setOpenCard(false) ;
        }
        const handleCloseNotes = () => {
            console.log("before", openCard);
            setOpenCard(true) ;
            console.log("after", openCard);
        }
        
        return(
        openCard ?
        (<Card className="note-card"   onClick={handleOpenNote}>
            <InputBase className="card-content"  placeholder="Take a Note.." aria-label="Take a Note..." style={{fontSize:'1.5rem'}} />
        </Card>)
        :
        (<Card className="note-title"   >
            <InputBase className="card-content"  placeholder="Title" aria-label="Title" style={{fontSize:'1.5rem'}}/>
            
            <InputBase className="card-content"  placeholder="Discription" aria-label="Discription" style={{fontSize:'1.5rem'}}/>

            
            <a className="close-note" title="Close" value="Close" onClick={handleCloseNotes}>Close</a>
        </Card>)
        
        )
    }

    export default withRouter (NoteCard);