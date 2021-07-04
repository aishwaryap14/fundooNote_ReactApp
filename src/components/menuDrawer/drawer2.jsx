import React, {prop} from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './drawer.scss';
import NoteIcon from '@material-ui/icons/Note';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CreateIcon from '@material-ui/icons/Create';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme( {
    overrides: {
        MuiDrawer:{
            paperAnchorLeft:{
            top: "79px",
            // left: "60px",
            height: "100%",
            width: "190px",
            outline: "0",
            // background:"#fafafa",
            zIndex: "0",
           
            },
            paperAnchorDockedLeft:{
                borderRight:"none"
            },
            modal:{
                marginTop:"40px"
            }
            
        },
        MuiPaper:{
            elevation16:{
                boxShadow:"none" 
            }
        }
    }
});


 function TemporaryDrawer({propsOpenDrawer}) {
    console.log("propsOpenDrawer value: ", propsOpenDrawer);
  

 

  const [anchor, setAnchor] = React.useState([{left:false}]);
  




  return (
    <MuiThemeProvider theme = {theme}>
      
        <React.Fragment key={anchor}>
            <Drawer className="swipe-drawer" anchor={"left"} 
            open={propsOpenDrawer} variant="persistent"
            style={{width:"240px",top:"80px"}}>
               

        <div  >
           <div className="notes-image">
                <div>
                <NoteIcon fontSize="large" color="action"/>
                </div>
                <div id="label-tags"><label>Notes</label></div>
            </div>
            <div className="reminder-image">
                <div>
                <AccessAlarmIcon fontSize="large" color="action"/>
                </div>
                <div id="label-tags"><label>  Reminder</label></div>
            </div>
            <div className="editCard-labels">
                <CreateIcon fontSize="large" color="action"/>
                <div id="label-tags"><label>Edit</label></div>
            </div>
            <div className="archive-mode">
                <ArchiveIcon fontSize="large" color="action"/>
                <div id="label-tags"><label>Archieves</label></div>
            </div>
            <div className="trash-image">
                <DeleteIcon fontSize="large" color="action"/>
                <div id="label-tags"><label>Trash</label></div>
            </div>
        </div>
            </Drawer>
        </React.Fragment>
      
    </MuiThemeProvider>
    ) 
}

export default withRouter (TemporaryDrawer) ;