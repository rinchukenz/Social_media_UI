import React from 'react'
import './Leftbar.css'
import freinds from '../../assets/1.png'
import groups from '../../assets/2.png'
import marketplace from '../../assets/3.png'
import watch from '../../assets/4.png'
import memories from '../../assets/5.png'
import events from '../../assets/6.png'
import gaming from '../../assets/7.png'
import gallery from '../../assets/8.png'
import videos from '../../assets/9.png'
import messages from '../../assets/10.png'
import fundraiser from '../../assets/13.png'
import tutorials from '../../assets/11.png'
import courses from '../../assets/12.png'



function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
         <div className="m1">
         <div className="user">
          <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <span>rinchu kenz</span>
          </div>
          <div className="items">
            <img src={freinds} alt="" />
            <span>Freinds</span>
          </div>
          <div className="items">
            <img src={groups} alt="" />
            <span>Freinds</span>
          </div>
          <div className="items">
            <img src={marketplace} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src={watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="items">
            <img src={memories} alt="" />
            <span>Memories</span>
          </div>
         </div>

          <hr/>
          <p>Your shortcuts</p>

         <div className="m2">
         <div className="items">
            <img src={events} alt="" />
            <span>Events</span>
          </div>
          <div className="items">
            <img src={gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="items">
            <img src={gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="items">
            <img src={videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="items">
            <img src={messages} alt="" />
            <span>Messages</span>
          </div>
         </div>

          <hr/>
          <p>Others</p>

          <div className="m3">
          <div className="items">
            <img src={fundraiser} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="items">
            <img src={tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="items">
            <img src={courses} alt="" />
            <span>Courses</span>
          </div>
          
          
          </div>



        </div>
      </div>
      
    </div>
  )
}

export default Leftbar

