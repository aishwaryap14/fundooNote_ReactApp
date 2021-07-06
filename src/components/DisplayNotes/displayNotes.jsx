import React, { useEffect, useState, props } from 'react';
import {withRouter}  from 'react-router-dom';
import { getAllNotes } from '../../services/noteService'
import './displayNotes.scss';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Avatar from '@material-ui/core/Avatar';
import PopoverPopupState from '../NotesCard/popoverOptions'

const DisplayNote = (propColor) => {
    const [allNotes, setAllNotes] = useState([]);
    // const [reminder, setReminder] = useState([]);
    const [chipVar, setChipVar] = useState("");
    useEffect(() => {
      
        getAllNotes().then((res) => {
            // console.log("response: ", res.data.data.data);
            let notesData = res.data.data.data;
            // allNotes=res.data.data.data;
            // console.log("response2: ", notesData);
            // console.log("title: ",{notesData})
            setAllNotes(res.data.data.data);
            
        })
    });

    const getReminder = (reminder) => {
        console.log("chipval", reminder);
        setChipVar(reminder);
    }

    return(
        <div className="cards">
    
            {allNotes.map(notes => {

            return (
                <div className="card-details">
                    <p className="cards-display" style={{background:notes.color}}>
                    <strong>{notes.title}</strong>
                    <p>{notes.description}</p>
                    <p>{notes.reminder == "" ? null : <Chip avatar={<Avatar><AccessTimeIcon/></Avatar>} label={notes.reminder}></Chip>}</p>
                    <div className="notecard-icon">
                        {/* <AddAlertIcon fontSize='medium'title='remind me' id ="AddAlertIcon"  /> */}
                        <PopoverPopupState  propChip={getReminder}/>
                        <PersonAddIcon fontSize='medium' id="PersonAddIcon"/>
                        <ColorLensIcon fontSize='medium' id="ColorLensIcon" />
                        <ImageIcon fontSize='medium' id="ImageIcon"/>
                        <ArchiveIcon fontSize='medium' id="ArchiveIcon" />
                        <MoreVertIcon fontSize='medium' id="MoreVertIcon" />
                    </div>
                    </p>
                </div>)
            })}

        
        </div>
    )
}
export default withRouter(DisplayNote) ;