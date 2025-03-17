import React from 'react'
import './Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to={"/"} style={{textDecoration: "none"}}>
        <span>ManuSocial</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
            <SearchOutlinedIcon/>
            <input type='text' placeholder='Search'/>
        </div>
      </div>
      <div className="right">
         <PermIdentityOutlinedIcon/>
         <NotificationsNoneOutlinedIcon/>
         <LocalPostOfficeOutlinedIcon/>
          <div className="user">
          <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>rinchu kenz</span>
          </div>

        </div>
    </div>
  )
}

export default Navbar
