import React from 'react'
import "./Rightbar.css"
// import {GoPrimitiveDot} from 'react-icons/go'
import { Users } from "../../DummyData";
import Online from "../online/Online";
function Rigthtbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarAd">
        <img className='adImg' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-advertisement-design-template-cfd149289a4f241f8bbde6277ac6960c_screen.jpg?ts=1622237544" alt="Advertisement" />
      </div>
      <div className="activeFriendsList">
        <h2>Friends</h2>
        <hr className='friendListHr'/>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rigthtbar