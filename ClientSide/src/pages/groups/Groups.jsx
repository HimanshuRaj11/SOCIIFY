import React from 'react'
import './groups.css'
export default function Groups() {
  return (
    <>
    <div className="groupsContainer">
      <h1>Gropups</h1>
      <div className="groupsList">
        <div className="groupCard">
          <div className="gropupPic">
            <img className='groupProfileImg' src="/assets/person/group.jpg" alt="group" />
          </div>
          <div className="groupsDetail">
            <div className="groupsDetailTital">Lorem ipsum dolor sit amet.</div>
            <div className="groupMembers">
              <h5 className='groupMembersNo'>50k Members</h5>
            </div>
            <div className="groupCommonDetail">
              <span className='groupsView'>100 Views</span>
              <span className='groupsUploadDate'>2 jan 2023</span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </>
  )
}
