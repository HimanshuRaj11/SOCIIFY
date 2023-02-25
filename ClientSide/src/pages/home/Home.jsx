import React from 'react'
import "./home.css"

// import {BsPersonFill} from 'react-icons/bs';
// import Topbar from '../../components/topbar/Topbar'
// import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rigthtbar"

export default function Home() {
  return (
    <>
    
    <div className="homeContainer">
   
    <Feed />
    <Rightbar />
    </div>
    </>
  )
}
