import React, { useState } from 'react'
import './Post.css'
import {Link} from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from '../Comments/Comments';

function Post({post}) {

    const [commentOpen,setCommentOpen] = useState(false);

  const [like,setLike] = useState(false)

  return (
    <div className='post'>
       <div className="container">
        <div className="user">
            <div className="userinfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userId}`} style={{textDecoration :"none", color :"inherit"}}>
                     <span className='name'>{post.name}</span>
                    </Link>
                    <span className='date'>1 min ago</span>
                    
                </div>
                
            </div>
            <MoreHorizOutlinedIcon/>
        </div>

        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>

        <div className="info">
            <div className="item">
            {like ? <FavoriteOutlinedIcon onClick={()=>setLike(!like)}/> : <FavoriteBorderOutlinedIcon onClick={()=>setLike(!like)}/>}
            <span>Likes</span>
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
            <span>Comments</span>
            </div>
            <div className="item">
            <ShareOutlinedIcon/>
            <span>Share</span>
            </div>
        </div>

        {commentOpen && <Comments/>}


       </div>
      
    </div>
  )
}

export default Post
