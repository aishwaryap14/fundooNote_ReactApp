import React,{useState} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar, InputBase} from '@material-ui/core';
import './notesCard.scss';
import PopoverPopupState from './popoverOptions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ColorPopUp from './colorPop'
import Chip from '@material-ui/core/Chip';

// import './popoverOptions';
import Remindme from './popoverOptions';

    const NoteCard = () => {
        // console.log("chip props: ", propChip);
        const [openCard, setOpenCard] = useState(true);
        const [chipVar, setChipVar] = useState("");
        var [color, setColor] = useState();
    

        const handleOpenNote =() => {
            setOpenCard(false) ;
        }
        const handleCloseNotes = () => {
            console.log("before", openCard);
            setOpenCard(true) ;
            console.log("after", openCard);
        }
        
    //    const getColor = (notecolor) => {
    //        setColor(notecolor);
    //        console.log("Add note color: ",color);
    //    }
        
        const getReminder = (reminder) => {
            console.log("chipval", reminder);
            setChipVar(reminder);
        }

        const setNoteCardColor = (notecolor) => {
            console.log("event: ", notecolor)
            setColor(notecolor);
            console.log("actual color: ",color);

        }

        return(
        openCard ?
        (<Card className="note-card"   onClick={handleOpenNote}>
            <InputBase className="card-content"  placeholder="Take a Note.." aria-label="Take a Note..." style={{fontSize:'1.5rem'}} />
        </Card>)
        :
        (<Card className="note-title"  style={{background:color}} >
            <InputBase className="card-content"  placeholder="Title" aria-label="Title" style={{fontSize:'1.5rem'}}/>
            
            <InputBase className="card-content"  placeholder="Discription" aria-label="Discription" style={{fontSize:'1.5rem'}} />
            {chipVar === "" ? null : <Chip label={chipVar}></Chip>}
            <div className="options-icon">
            <div className="notecard-icon">
                <PopoverPopupState fontSize='medium'  title='remind me' id ="AddAlertIcon"   propChip={getReminder} />

                <PersonAddIcon fontSize='medium' id="PersonAddIcon"/>
                <ColorPopUp fontSize='medium' id="ColorLensIcon" propColor={setNoteCardColor}/>
                <ImageIcon fontSize='medium' id="ImageIcon"/>
                <ArchiveIcon fontSize='medium' id="ArchiveIcon" />
                <MoreVertIcon fontSize='medium' id="MoreVertIcon" />
            </div>
                <div className="close-button">
                <a className="close-note" title="Close" value="Close" onClick={handleCloseNotes}>Close</a>
                </div>
            </div>

            
        </Card>)
        
        )
    }

    export default withRouter (NoteCard);