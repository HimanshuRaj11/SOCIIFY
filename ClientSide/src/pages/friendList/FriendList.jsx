import React from 'react'
import './friendList.css'
import {MdDelete} from 'react-icons/md'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import { Users } from '../../DummyData'


function FriendsCard(U){
  return(
    <div className="friendListCard">
    <div className="friendImg">
     <NavLink to={`/profile/${U.id}`} ><img className='ListFriendProfilePic' src={U.profilePic} alt="" /></NavLink> 
    </div>
    <div className="listFriendDetail">
      <NavLink to={`/profile/${U.id}`}  ><h2>{U.username}</h2></NavLink>
      <span classNmae="lisrFriendFollowers">{U.Followers} Followers</span>
    </div>
    <div className="ListFriendOptions">
      <NavLink><MdDelete className='FriendOptinIcon' /></NavLink>
      <NavLink><BsFillChatLeftTextFill  className='FriendOptinIcon'/></NavLink>
    </div>
  </div>
  )
}
export default function FriendList() {
  return (
    <>
    <div className="friendListComponent">
        <h1>My Friends</h1>
        <div className="friendsListDiv">

        {Users.map((U)=>(FriendsCard(U)))}

        </div>
    </div>
    </>
  )
}
