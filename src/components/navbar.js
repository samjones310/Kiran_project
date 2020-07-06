import React from 'react';
import '../App.css';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import {Typography,IconButton,MenuItem,Menu} from '@material-ui/core';
import { Grid } from "@material-ui/core";
//import {Link as RouterLink, BrowserRouter, withRouter} from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Image} from 'react-bootstrap';

function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    "Profile",'Help and Support',"Logout"
  ];
  
return (
<div>
  <AppBar position="fixed" style={{ background: 'rgb(255, 255, 255)',height:'100px' }}>
    <Toolbar>
    <Image alt="Powered by Maverick" src="/Kiran_project/Amirtha_logo.jpg"  
        style={{marginTop:21,marginBottom:21}} width="170px" height="57px" />
      
    <Image alt="Powered by Maverick" src="/Kiran_project/Sen_logo.jpg"  
        style={{marginTop:20,marginLeft:25,marginBottom:20}} width="132px" height="57px" />

    <Typography style={{color: 'rgb(30, 30, 30)',fontFamily: 'Open Sans',fontSize: 20,fontWeight: 600
    ,width: "70%",marginLeft:22,textAlign:'left',marginRight:10}}>
      PARKINSONS DEISEASE DETECTION USING ENSEMBLED DEEP LEARNING
    </Typography>

    <AccountCircle  style={{ fontSize:50,marginTop:14,marginBottom:15,marginLeft:400,marginLeft:50,
      color:'rgb(39, 39, 39)'}}/>  

    <IconButton
      aria-label="more"
      aria-controls="menu"
      aria-haspopup="true"
      onClick={handleClick}
    >
    
    <ArrowDropDownIcon fontSize="large"  style={{marginTop:41,fontSize:45,border:'1px solid rgb(30, 30, 30);',
      marginRight:40,marginBottom:50}} />

    </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
          keepMounted
          transformOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
          open={open}
          onClose={handleClose}
        >

          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Profile"}
              onClick={handleClose}
            >
            {option}
            </MenuItem>
          ))}
        </Menu>

    </Toolbar>
  </AppBar>
</div>
);

}

export default Navbar;