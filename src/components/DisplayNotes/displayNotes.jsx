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

const DisplayNote = props => {
    const [allNotes, setAllNotes]= useState([]);
    // useEffect(() => {
    //     getAllNotes().then(res) => {
    //         console.log("response", resp);
    //         setAllNotes();
    //     }
    // });

    // const getNotes = () => {
    //     getAllNotes().then((res) => {
    //         console.log("All notes: ", res);
    //     })
    // }

    useEffect(() => {
        // console.log("token Id: ", this.props.match.params.token)
        // localStorage.setItem('token',this.props.match.params.token);
        // console.log("token localStorage: ", this.props.match.params.token);
        // console.log("in use effect of get note")
        getAllNotes().then((res) => {
            // console.log("response: ", res.data.data.data);
            let notesData = res.data.data.data;
            // allNotes=res.data.data.data;
            // console.log("response2: ", notesData);
            // console.log("title: ",{notesData})
            setAllNotes(res.data.data.data);
            // console.log("allNotes", allNotes);
        })
    });

    // const displayNote = props => {
    // return (
    // <li>
    //     <div
    //             className="card-container"
    //             style={{
    //             width: "50%",
    //             border: "solid 3px #d3d3d3",
    //             margin: "10px auto"
    //             }}
    //         >
        
         {/* <p>
            <strong>{allNotes.title}</strong>
        </p> */}
            {/* <p>{props.notesData.notesData.description}</p> */}
            {/* <p>{props.character.alignment}</p> */}
//         </div>
//     </li>
// );
//     }

    return(
        <div className="cards">
        
            {/* <p><strong>{props.allNotes}</strong></p> */}
            {allNotes.map(notes => {
                // console.log("Notes: ", notes);
            // return <displayNote notes={notes} key={notes.id} />;
            return (
                <div className="card-details">
                    <p className="cards-display" >
                    <strong>{notes.title}</strong>
                    <p>{notes.description}</p>
                    <div className="notecard-icon">
                        <AddAlertIcon fontSize='medium'title='remind me' id ="AddAlertIcon"  />
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