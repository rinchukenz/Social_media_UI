import React from 'react'
import './Posts.css'
import Post from '../Post/Post'



function Posts() {

  const posts = [
    {
      id:1,
      name:"ohn doe",
      userId:1,
      profilePic:"https://images.pexels.com/photos/16026432/pexels-photo-16026432/free-photo-of-bearded-man-in-a-shirt-standing-by-the-water-on-an-island.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"asddfsfdhgkj;lkjhgd",
      img:"https://media.istockphoto.com/id/1643695703/photo/happy-young-indian-friends-sitting-at-park-or-garden-playing-guitar-and-music-having-fun.jpg?b=1&s=612x612&w=0&k=20&c=hgwDXNlJ3YOeztBjbfrljrjsM83PCpdBVvhZOmwTBGU="
    },
    {
      id:2,
      name:"Harry",
      userId:2,
      profilePic:"https://images.pexels.com/photos/10542445/pexels-photo-10542445.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"wertyuiolkjhgf",
      img:"https://images.pexels.com/photos/4846093/pexels-photo-4846093.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      name:"Selena",
      userId:3,
      profilePic:"https://images.pexels.com/photos/6706847/pexels-photo-6706847.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"kueytuuyuii fyguhjk fgh cvbnm tyuio hjkl bnm, ghjk",
      img:"https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      name:"cooper",
      userId:4,
      profilePic:"https://images.pexels.com/photos/8358795/pexels-photo-8358795.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"tyui tyuio tyuio fghjk ghjkl vbn vc dfgh hgf sdf gh jhdrtyui ghjk iiuh",
      img:"https://images.pexels.com/photos/2769753/pexels-photo-2769753.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  return (
    <div className='posts'>
      {
        posts.map(post=>(
          <Post post={post} key={post.id}/>
            
        ))
      }
      
    </div>
  )
}

export default Posts
