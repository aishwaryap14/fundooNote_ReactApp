import {Card, createMuiTheme, Link, TextField, Snackbar, AppBar,Toolbar,IconButton,classes,
    Typography, InputBase} from '@material-ui/core';
import React,{Component} from 'react';
import SearchIcon from '@material-ui/core/Icon';
import './dashboard.scss';
import NoteCard from '../NotesCard/notesCard.jsx';
import MenuDrawer from '../menuDrawer/drawer';
import DisplayNotes from '../DisplayNotes/displayNotes';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class DashBoard extends Component {
    constructor() {
        super();
        this.state={
            dashBoard:'',
            setDrawer:false
         }
    }

    handleDrawer = () => {
        this.setState({
            setDrawer:!this.state.setDrawer
        })
    }

    

render(){
    return( 
<div className="dashboard-comp">
    <div className="dashAppbar">
    <div className="dashboardTools">
        <div className="menubarName">
            <div className="menuBar" onClick={this.handleDrawer}>
                <a><MenuIcon fontSize="large" color="action"/></a>
            </div>
            <div className="appName">

                <Typography variant="h4" style={{fontWeight:'bold'}}>FundooNotes</Typography>
            </div>
        </div>
        <div className="searchBar">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            {/* <div><TextField className="searchTextField" placeholder="search" ></TextField></div> */}
            <div className="search-field">
               <SearchIcon fontSize="large" color="action"/>
             </div>
             <InputBase className="searchInput"
               placeholder="Search…" id="searchInput"/>
        </div>
        <div className="cartList">
            <div className="cart-icon">
            <RefreshIcon fontSize="large" color="action"/>
            </div>
            <div className="list-icon">
                <ListIcon fontSize="large" color="action" />
            </div>
            <div className="user-icon">
                <AccountCircleIcon fontSize="large" color="action" />
            </div>
        </div>
    </div>
    <MenuDrawer propsOpenDrawer={this.state.setDrawer}/>
    </div>
    <div className="addNotes">
        
        <NoteCard/>
    </div>
    <DisplayNotes/>
</div>
    )
}

    }
    export default DashBoard;