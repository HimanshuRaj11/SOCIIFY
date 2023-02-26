import React from 'react'
import "./Sidebar.css";
import { NavLink } from 'react-router-dom';
import {MdRssFeed, MdVideoLibrary ,MdGroups, MdEvent, MdSchool} from 'react-icons/md'
import { BsFillBookmarkFill, BsFillQuestionCircleFill, BsBag} from 'react-icons/bs'
import {ImHome} from 'react-icons/im'
import {FaUserFriends} from 'react-icons/fa'
import {AiFillExclamationCircle} from 'react-icons/ai'
function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <NavLink to='/'><ImHome className="sidebarIcon" /></NavLink>
            <NavLink to='/' className="link sidebarListItemText">Home</NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/feed'><MdRssFeed className="sidebarIcon"  /></NavLink>
            <NavLink to='/feed'  className="link sidebarListItemText">Feed <AiFillExclamationCircle className='decibelSidebar'/> </NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/videos'><MdVideoLibrary className="sidebarIcon"  /></NavLink>
            <NavLink to='/videos' className="link sidebarListItemText">Videos</NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/friends'><FaUserFriends className="sidebarIcon" /></NavLink>
            <NavLink to='/friends' className="link sidebarListItemText">Friends</NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/groups'><MdGroups className="sidebarIcon" /></NavLink>
            <NavLink to='/groups' className="link sidebarListItemText">Groups</NavLink>
          </li>
          <li className="sidebarListItem">
          <NavLink to='/bookmark'>< BsFillBookmarkFill className="sidebarIcon" /></NavLink>
            <NavLink to='/bookmark' className="link sidebarListItemText">Bookmarks <AiFillExclamationCircle className='decibelSidebar'/></NavLink>
          </li>
          <li className="sidebarListItem">
          <NavLink to='/Questions'>< BsFillQuestionCircleFill className="sidebarIcon" /></NavLink>
            <NavLink to='/Questions' className="link sidebarListItemText">Questions <AiFillExclamationCircle className='decibelSidebar'/></NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/job'>< BsBag className="sidebarIcon" /></NavLink>
            <NavLink to='/job' className="link sidebarListItemText">Jobs <AiFillExclamationCircle className='decibelSidebar'/></NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/events'>< MdEvent className="sidebarIcon" /></NavLink>
            <NavLink to='/events' className="link sidebarListItemText">Events</NavLink>
          </li>
          <li className="sidebarListItem">
            <NavLink to='/cource'>< MdSchool className="sidebarIcon" /></NavLink>
            <NavLink to='/cource' className="link sidebarListItemText">Courses <AiFillExclamationCircle className='decibelSidebar'/></NavLink>
          </li>
        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
      </div>
    </div>
    </>
  )
}

export default Sidebar