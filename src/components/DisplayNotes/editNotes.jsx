import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import { updateNote } from '../../services/noteService'
const Poptheme = createMuiTheme( {
    overrides: {
        MuiPopover:{
            paper:{
                width: "230px",
                background:"white"
            }
        }
    }
  });

const EditNotes = ({propId,propTitle, propDiscription}) => {
const [openPop, setOpenPop] = useState(false);
const [anchor, setAnchor] = useState(null);
const [noteId, setId] = useState("");
const [title, setTitle] = useState("")
const [discription, setDiscription] = useState("");

const handleEditPop = async(event) => {
    setOpenPop(!openPop);
    setAnchor(event.CurrentTarget);
   
    
}

const handleClose = () => {
    setOpenPop(false);
}



const handleUpdateNote = async() => {
    setOpenPop(false);
    let formData = {
        noteId : propId,
        title: title,
        description: discription
    }
    if(noteId !== null) {
      await updateNote(formData).then((res) => {
        console.log(res);
      });
} else {
        console.log("in else block of handleUpdateNote")
}
}

    return (
        <MuiThemeProvider theme = {Poptheme}>
            <EditIcon fontSize='medium' id="EditIcon" onClick={handleEditPop} />
        <Dialog 
            open={openPop}
            anchorEl={anchor}
            onClose={handleClose}
        >
            <DialogContent >
            <div>
                <TextField style={{width:"250px",padding:"10px"}} defaultValue={propTitle} value={title ? title : propTitle} onChange={(event)=> {setTitle(event.target.value)}} />
            </div>
            <div>
                <TextField style={{width:"250px",padding:"10px"}} defaultValue={propDiscription} value={discription ? discription : propDiscription} onChange={(event)=> {setDiscription(event.target.value)}}></TextField>
            </div>
            <div style={{margin:"10px",display:"flex",justifyContent:"flex-end"}}>
                <a className="close-note" onClick={handleUpdateNote} >Close</a>
            </div>
            </DialogContent>
        </Dialog>
        </MuiThemeProvider>
    )
}

export default withRouter (EditNotes);