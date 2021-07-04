import React,{useState} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar, InputBase} from '@material-ui/core';
import './notesCard.scss';
import PopoverPopupState from './popoverOptions';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ColorPopUp from './colorPop'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { addNotes } from '../../services/noteService'


// import './popoverOptions';
import Remindme from './popoverOptions';



    const NoteCard = () => {
        let [title, setTitle] = useState("");
        let [description, setDescription] = useState("");
        let [isArchived, setIsArchived] = useState(false);
        const [openCard, setOpenCard] = useState(true);
        const [chipVar, setChipVar] = useState("");
        var [color, setColor] = useState();
    

        const handleOpenNote =() => {
            setOpenCard(false) ;
        }
        const handleCloseNotes = async() => {
            console.log("before", openCard);
            setOpenCard(true) ;
            console.log("after", openCard);
            let formData = {
                title: title,
                description: description
            }
            console.log("addNotedata:", formData);
            if(title !== null || description !== null){
              await  addNotes(formData).then((res) => {
                    console.log("in add note if block");
                    console.log(res);
                });
            } else {
                console.log("in add Note else block")
            }
        }
        
        const handleTitle = (event) => {
            console.log(event.target.value);
            setTitle(event.target.value);
            console.log("title: ", title);
        }

        const handleDescription = (event) => {
            console.log(event.target.value);
            setDescription(event.target.value);
            console.log("title: ", description);
        }

        const handleArchieves = (event) => {
            setIsArchived(!event);
            console.log("IsArchieved: ", isArchived);
        }
        
        const getReminder = (reminder) => {
            console.log("chipval", reminder);
            setChipVar(reminder);
        }

        const setNoteCardColor = (notecolor) => {
            console.log("event: ", notecolor)
            setColor(notecolor);
            console.log("actual color: ",color);

        }
        const handleDelete = () => {
            setChipVar("");
        }

        return(
        openCard ?
        (<Card className="note-card"   onClick={handleOpenNote}>
            <InputBase className="card-content"  placeholder="Take a Note.." aria-label="Take a Note..." style={{fontSize:'1.5rem'}} />
        </Card>)
        :
        (<Card className="note-title"  style={{background:color}} >
            <InputBase className="card-content"  placeholder="Title" aria-label="Title" onChange={handleTitle} style={{fontSize:'1.5rem'}}/>
            
            <InputBase className="card-content"  placeholder="Discription" aria-label="Discription" onChange={handleDescription} style={{fontSize:'1.5rem'}} />
                {chipVar === "" ? null : 
                <Chip  avatar={<Avatar><AccessTimeIcon/></Avatar>}
                      label={chipVar} 
                      onDelete={handleDelete}>
                </Chip> }
            <div className="options-icon">
            <div className="notecard-icon">
                <PopoverPopupState fontSize='medium'  title='remind me' id ="AddAlertIcon"   propChip={getReminder} />

                <PersonAddIcon fontSize='medium' id="PersonAddIcon"/>
                <ColorPopUp fontSize='medium' id="ColorLensIcon" propColor={setNoteCardColor}/>
                <ImageIcon fontSize='medium' id="ImageIcon"/>
                <ArchiveIcon fontSize='medium' id="ArchiveIcon" onClick={handleArchieves}/>
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