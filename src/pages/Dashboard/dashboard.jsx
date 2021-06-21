import {Card, createMuiTheme, Link, TextField, Snackbar, AppBar,Toolbar,IconButton,classes,
    Typography, InputBase} from '@material-ui/core';
import React,{Component} from 'react';
import SearchIcon from '@material-ui/core/Icon';
import './dashboard.scss';
import NoteCard from '../NotesCard/notesCard.jsx';
import MenuDrawer from '../menuDrawer/drawer';
import DisplayNotes from '../DisplayNotes/displayNotes';


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
                <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/></svg></a>
            </div>
            <div className="appName"><Typography variant="h4" style={{fontWeight:'bold'}}>FundooNotes</Typography></div>
        </div>
        <div className="searchBar">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            {/* <div><TextField className="searchTextField" placeholder="search" ></TextField></div> */}
            <div className="search-field">
               <SearchIcon />
             </div>
             <InputBase className="searchInput"
               placeholder="Search…" id="searchInput"/>
        </div>
        <div className="cartList">
            <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            </div>
            <div className="list-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
            </div>
            <div className="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>
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