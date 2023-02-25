import React, { useState } from 'react'
import './post.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc'
import {Users} from '../../DummyData'

export default function Post({post}) {
   const [like, setLike] = useState(post.likes)

   const [isLiked, setIsLiked ]= useState(false)

   const likeHandeler = ()=>{
    setLike(isLiked ? like-1 : like +1 )
    setIsLiked(!isLiked)
   }

    return (
        <>

    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePic} alt="ProfilePicture" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="postDate"> {post.date} </span>
                </div>
                <div className="postTopRight">
                    <BsThreeDotsVertical className='ThreeVerticalDots'/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> {post.desc} </span>
                <div className="imagePost">
                <img src={post.photo} alt="PostImage" className='postImg' />
                </div>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <AiFillLike className='likeIcon iconLike' onClick={likeHandeler} />
                    <FcLike className='likeIcon iconHeart' onClick={likeHandeler} />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="comment">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}
