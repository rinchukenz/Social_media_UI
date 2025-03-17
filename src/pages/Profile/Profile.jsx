import React from 'react'
import './Profile.css'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../Components/Posts/Posts';

function Profile() {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='cover' />
        <img src="https://images.pexels.com/photos/6635041/pexels-photo-6635041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="profilepic" />
      </div>
      <div className="profilecontainer">
        <div className="uinfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon/>
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon/>
            </a>
            <a href="https://www.facebook.com/">
              <XIcon/>
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon/>
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon/>
            </a>           
          </div>

          <div className="center">
            <span>Rinchu Kenz</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize='smaller'/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize='smaller'/>
                <span>manu.wiki</span>
              </div>
            </div>
            <button>follow</button>
          </div>

          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      
      <Posts/>
      
      
      
    </div>
    
  )
}

export default Profile
