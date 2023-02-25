import React from 'react'
import './Share.css'
import {MdPermMedia, MdLocationOn} from "react-icons/md"
import {AiFillTag} from "react-icons/ai"
import {BsFillEmojiSmileFill} from "react-icons/bs"

function Share() {
  return (
    <div className="share">
        <div className='shareWrapper'>
            <div className="shareTop">
                <img src="/assets/person/p1.jpg" alt="ProfilePicture" className="shareProfileImg" />
                <input type="text"  className="shareInput" placeholder="What's in your Mind ?" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        
                        <MdPermMedia style={{color:"red"}} className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <AiFillTag style={{color:"blue"}} className='shareIcon' />
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationOn style={{color:"green"}} className='shareIcon' />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiSmileFill style={{color:"#D4AC0D "}} className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>

  )
}

export default Share