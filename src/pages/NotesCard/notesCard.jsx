import React,{useState} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar, InputBase} from '@material-ui/core';
import './notesCard.scss';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
            
            <div className="options-icon">
            <div className="notecard-icon">
                <AddAlertIcon fontSize='medium'title='remind me'/>
                <PersonAddIcon fontSize='medium' />
                <ColorLensIcon fontSize='medium' />
                <ImageIcon fontSize='medium' />
                <ArchiveIcon fontSize='medium' />
                <MoreVertIcon fontSize='medium' />
            </div>
                <div className="close-button">
                <a className="close-note" title="Close" value="Close" onClick={handleCloseNotes}>Close</a>
                </div>
            </div>
        </Card>)
        
        )
    }

    export default withRouter (NoteCard);