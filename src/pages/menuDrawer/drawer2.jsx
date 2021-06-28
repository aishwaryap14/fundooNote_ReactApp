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
           
            height: "100%",

            outline: "0",

            zIndex: "0"
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
  

 
  const [open, setOpen] = React.useState(propsOpenDrawer);
  console.log("open val11: ",open)
  const [anchor, setAnchor] = React.useState([{left:false}]);
  

  const handleDrawer = () => {
    //   console.log("in handleDrawer: ", event)
    setOpen(!open);
    // console.log("in handleDrawer: ", state)
      console.log("open val: ",open)
  }



  return (
    <MuiThemeProvider theme = {theme}>
      
        <React.Fragment key={anchor}>
            <Drawer className="swipe-drawer" anchor={"left"} 
            open={propsOpenDrawer} variant="persistent"
            style={{width:"240px",top:"80px"}}>
                {/* {list(anchor)} */}

        <div className="sidenav" >
            <IconButton onClick={handleDrawer}>
                <ChevronLeftIcon /> 
            </IconButton>
            <div className="notes-image">
                {/* <img src={notesImage} alt=""/> */}
                <NoteIcon fontSize="large" color="action"/>
            </div>
            <div className="reminder-image">
                <AccessAlarmIcon fontSize="large" color="action"/><label>Reminder</label>
            </div>
            <div className="editCard-labels">
                <CreateIcon fontSize="large" color="action"/>
            </div>
            <div className="archive-mode">
                <ArchiveIcon fontSize="large" color="action"/>
            </div>
            <div className="trash-image">
                <DeleteIcon fontSize="large" color="action"/>
            </div>
        </div>
            </Drawer>
        </React.Fragment>
      
    </MuiThemeProvider>
    ) 
}

export default withRouter (TemporaryDrawer) ;