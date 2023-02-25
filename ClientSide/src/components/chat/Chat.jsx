import React from 'react'
import './chat.css'
import { ImCross , ImSearch,ImLocation} from "react-icons/im";
import { MdCall , MdPermMedia} from "react-icons/md";
import {FcVideoCall} from "react-icons/fc"
import {SlOptionsVertical} from "react-icons/sl"
import {FiSend} from "react-icons/fi"
import {FaPaperclip} from "react-icons/fa"


export default function Chat(props) {
    const toggleChatBtn = () => {
        props.toggleChatF();
      };
  return (
    <div className='ChatContainer'>
        <div className="FriendRequestCross">
        <span onClick={toggleChatBtn} className="FriendRequestTopRightIconBox">
          <ImCross className="FriendRequestTopRightIcon" />
        </span>
      </div>
      <div className="ChatMainBox">
        <div className="chatBox">
            <div className="TopChatBar">
                <div className="topImgPart">
                    <img className='ChatProfilePic' src="assets/person/pic2.jpg" alt="" />
                </div>
                <div className="topcenterPart">
                    <div className="namePart"><i className="fas fa-level-down-alt"></i></div>
                    <div className="statusPart">Active/typing...</div>
                </div>
                <div className="topOptionPart">
                    <MdCall  className=' ChatOptionIconCall'/>
                    <FcVideoCall className=' ChatOptionIconVideocall' />
                    <SlOptionsVertical className=' ChatOptionIconMore' />
                </div>
            </div>
            <div className="centreChatBar">
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">hello</span>
                </div>

                <div className="chatOfMine"><span className='mineMsg'>Hii</span></div>
                <div className="chatOfMine"><span className='mineMsg'>How are U Today?</span></div>

                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">I'm fine</span>
                </div>
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">What About you</span>
                </div>
                <div className="chatOfMine"><span className='mineMsg'>When You Come Home</span></div>
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">I'm fine</span>
                </div>
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">What About you</span>
                </div>
                <div className="chatOfMine"><span className='mineMsg'>When You Come Home</span></div>
                <div className="chatOfMine"><span className='mineMsg'>When You Come Home</span></div>
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">I'm fine</span>
                </div>
                <div className="chatOfFriend">
                    <span className="friendsName">leena </span>
                    <span className="friendMsg">What About you</span>
                </div>



            </div>
            <div className="bottomChatBar">
                <div className="documentPart">
                <MdPermMedia className='ChatUseIcon'/>
                <FaPaperclip className='ChatUseIcon'/>
                <ImLocation className='ChatUseIcon'/>
                </div>
                <div className="messagePart">
                    <input type="text" placeholder='Write Your message To sent' className='MessageSend'/>
                </div>
                <div className="sentPart">
                    <FiSend className='ChatUseIconSend'/>
                </div>
            </div>
        </div>
        <div className="chatFriendList">
            <div className="chatTopbar">
                <h1 className="titalChat">Chats</h1>
                <div className="searchChatContainer">
                <input type="search" placeholder='Search Chats' className='searchChats' name="" id="" /> <ImSearch className='SearchChatIcon' />
                </div>
            </div>
            <div className="chatFriendsList">

                <div className="chatFriend">
                    <div className="imgCont">
                        <img src="assets/person/pic2.jpg" alt="" className="ChatProfilePic" />
                    </div>
                    <div className="chatDetail">
                        <span className="chatName">Leena</span>
                        <span className='newChat'>Hello baby</span>
                    </div>
                    <div className="ChatactiveStatus">
                        <span className='ChatActiveDot'></span>
                    </div>
                </div>

               


            </div>
        </div>
      </div>
    </div>
  )
}

