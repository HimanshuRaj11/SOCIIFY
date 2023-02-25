import React from 'react'
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import './notification.css'

export default function Notification(props) {
    const toggleNotificationBtn = () => {
        props.toggleNotificationF();
      };
  return (
    <div className='NotificationContainer'>
        <div className="FriendRequestCross">
            <span onClick={toggleNotificationBtn} className="FriendRequestTopRightIconBox">
            <ImCross className="FriendRequestTopRightIcon" />
            </span>
        </div>
        <h1>Notifications</h1>
        <div className="notificationBox">
            <div className="notificationCard">
                <div className="Notificationlogo">
                    <img className='LogoNotificationImage' src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e" alt="" />
                </div>
                <div className="NotificationDetail">
                    <p>Lorem magnam sed dolores vero! Inventore hic eaque iure delectus asperiores commodi?</p>
                </div>
                <div className="NotificationOption">
                    <MdDelete className='DeleteNotificationIcon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
