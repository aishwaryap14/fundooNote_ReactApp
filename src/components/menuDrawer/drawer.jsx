import React,{useState} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar,Fragment,Button,Drawer} from '@material-ui/core';
import './drawer.scss';
import NoteIcon from '@material-ui/icons/Note';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CreateIcon from '@material-ui/icons/Create';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
// import classNames from 'classnames';

const theme = createMuiTheme( {
    overrides: {
        MuiDrawer:{
            paper:{
            position:"initial"
            },
            modal:{
                marginTop:"40px"
            }
            
        },
        MuiBackdrop:{
            root:{
                position:"initial" ,
                
            }
        }
    }
});


const MenuCard = ({propsOpenDrawer}) => {
    const { classes, theme } = propsOpenDrawer;       
        return ( 
        //     propsOpenDrawer ? (
        // <div className="sidenav" >
        //     <div className="notes-image">
        //         {/* <img src={notesImage} alt=""/> */}
        //         <NoteIcon fontSize="large" color="action"/>
        //     </div>
        //     <div className="reminder-image">
        //         <AccessAlarmIcon fontSize="large" color="action"/>
        //     </div>
        //     <div className="editCard-labels">
        //         <CreateIcon fontSize="large" color="action"/>
        //     </div>
        //     <div className="archive-mode">
        //         <ArchiveIcon fontSize="large" color="action"/>
        //     </div>
        //     <div className="trash-image">
        //         <DeleteIcon fontSize="large" color="action"/>
        //     </div>
           
        // </div> ) : 
        // (
           
        <div className="sidenav"  style={{width:'15%',marginLeft:'-10px',fontStyle:'initial',fontWeight:'bold',background: '#f5d4d9',transition:'width 2s',transitionDelay:'0.5s'}}>
        <Drawer style={{width:"240px",variant:"permanent",marginTop:"80px",height:"60rem"}} open={propsOpenDrawer}>
            <div className="notes-image">
                <NoteIcon fontSize="large" color="action"/>
                <label style={{color:'black'}}>Notes</label>
            </div>
            <div className="reminder-image">
                <AccessAlarmIcon fontSize="large" color="action"/>
                <label style={{color:'black'}}>Reminder</label>
            </div>
            <div className="editCard-labels">
                <CreateIcon fontSize="large" color="action"/>
                <label style={{color:'black'}}>Edit</label>
            </div>
            <div className="archive-mode">
                <ArchiveIcon fontSize="large" color="action"/>
                <label style={{color:'black'}}>Archives</label>
            </div>
            <div className="trash-image">
                <DeleteIcon fontSize="large" color="action"/>
                <label style={{color:'black'}}>Trash</label>
            </div>
        </Drawer>
        </div>
        
        )
       
        // )
    
        
    
}
export default withRouter (MenuCard) ;