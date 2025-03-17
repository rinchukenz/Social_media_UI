import React from 'react'
import './Stories.css'

function Stories() {
    const stories = [

   
        {
            id:1,
            name:"Manu",
            img:"https://images.pexels.com/photos/5491329/pexels-photo-5491329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:2,
            name:"Arun",
            img:"https://images.pexels.com/photos/29328701/pexels-photo-29328701/free-photo-of-curious-cats-peeking-through-rustic-shed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:3,
            name:"Appu",
            img:"https://images.pexels.com/photos/5491329/pexels-photo-5491329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id:4,
            name:"Sinan",
            img:"https://images.pexels.com/photos/5491329/pexels-photo-5491329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
       
    ];
  return (
    <div className='stories'>
        <div className="story">
                <img src="https://images.pexels.com/photos/28945197/pexels-photo-28945197/free-photo-of-serene-autumn-portrait-of-woman-in-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>Alexandra</span>
                <button>+</button>
            </div>
           
      {
        stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
                
            </div>
        ))
      }
    </div>
  )
}

export default Stories
