import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import './Topbar.css'
import FriendRequest from '../friendRequest/FriendRequest'
import Chat from '../chat/Chat'
import Notification from '../notification/Notification'
import {Users} from '../../DummyData'

import {BsSearch , BsPersonFill , BsFillChatLeftTextFill} from 'react-icons/bs'
import {MdNotificationsActive} from 'react-icons/md';

export default function Topbar() {
    const Profile = Users.filter((u=>u.id===1))
    const ProfilePic = Profile[0].profilePic;

    
    const [toggle, setToggle] = useState(false)
    const [toggleChat, setToggleChat] =useState(false)
    const [toggleNotification, setToggleNotification] =useState(false)

    const ToggleFriendReqest = ()=>{
        if (toggleChat) {
            setToggleChat(!toggleChat)
        }
        if (toggleNotification) {
            setToggleNotification(!toggleNotification)
        }
        setToggle(!toggle)
    }
    
    const ToggleChat=()=>{
        if (toggle) {
            setToggle(!toggle)
        }
        if (toggleNotification) {
            setToggleNotification(!toggleNotification)
        }
        setToggleChat(!toggleChat)
    }
    const ToggleNotification=()=>{
        if (toggle) {
            setToggle(!toggle)
        }
        if (toggleChat) {
            setToggleChat(!toggleChat)
        }
        setToggleNotification(!toggleNotification)
    }
  return (
    <>
    <div className="topbarContainer">
        <div className="topbarLeft">
            <NavLink to="/" className="logo teko">SOCIIFY</NavLink>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <BsSearch className="SearchIcon"/>
                <input type="text" className="searchInput" placeholder='Search for Friends , Post or Videos' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topBarLinks">
                <NavLink to= '/login' className="topbarlink">Login</NavLink>
                <NavLink to= '/register' className="topbarlink">signIn</NavLink>
            </div>
            <div className="topbarIcon">
                <div className="topbariconitem">
                    <BsPersonFill onClick={ToggleFriendReqest}/> <span className="topbariconBadge">1</span>
                </div>
                <div className="topbariconitem">
                    <BsFillChatLeftTextFill onClick={ToggleChat} /> <span className="topbariconBadge">1</span>
                </div>
                <div className="topbariconitem">
                    <MdNotificationsActive onClick={ToggleNotification}/> <span className="topbariconBadge">1</span>
                </div>
            </div>
            <NavLink to="/profile/1"><img src={ProfilePic} alt="ProfileImage" className='ProfilePic'/></NavLink>
        </div>
    </div>
    {toggle ? <FriendRequest toggleF={ToggleFriendReqest} /> : null }
    {toggleChat ? <Chat toggleChatF={ToggleChat} /> : null }
    {toggleNotification ? <Notification toggleNotificationF={ToggleNotification} /> : null }

    </>
  )
}
