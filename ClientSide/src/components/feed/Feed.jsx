import React from 'react'
import "./Feed.css"
import Share from '../../components/share/Share'
import Post from '../../components/post/Post'
import {Posts} from '../../DummyData'

function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((p)=>(
        <Post key={p.id} post={p} />
        ))}

      </div>
    </div>
  )
}

export default Feed