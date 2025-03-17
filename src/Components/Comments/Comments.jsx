import React from 'react'
import './Comments.css'


function Comments() {

    

    const comments = [
        {
            id :1,
            comm:"scrambled it to make a type specimen book. It has survived not only five centuries",
            name:"joker",
            userId:1,
            proPic:"https://images.pexels.com/photos/16026432/pexels-photo-16026432/free-photo-of-bearded-man-in-a-shirt-standing-by-the-water-on-an-island.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id :2,
            comm:"scrambled it to make a type specimen book. It has survived not only five centuries",
            name:"joker",
            userId:2,
            proPic:"https://images.pexels.com/photos/16026432/pexels-photo-16026432/free-photo-of-bearded-man-in-a-shirt-standing-by-the-water-on-an-island.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id :3,
            comm:"scrambled it to make a type specimen book. It has survived not only five centuries",
            name:"joker",
            userId:3,
            proPic:"https://images.pexels.com/photos/16026432/pexels-photo-16026432/free-photo-of-bearded-man-in-a-shirt-standing-by-the-water-on-an-island.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id :4,
            comm:"scrambled it to make a type specimen book. It has survived not only five centuries",
            name:"joker",
            userId:4,
            proPic:"https://images.pexels.com/photos/16026432/pexels-photo-16026432/free-photo-of-bearded-man-in-a-shirt-standing-by-the-water-on-an-island.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]
  return (
    <div className='comments'>
        
        {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.proPic} alt="" />
                    <div className="info">
                      <span>{comment.name}</span> 
                      <p>{comment.comm}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))
        }
      
    </div>
  )
}

export default Comments
