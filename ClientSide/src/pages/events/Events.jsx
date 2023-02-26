import React from 'react'
import './events.css'
export default function Events() {
  return (
    
    <>
    <div className="eventsContainer">
    <h1>Events</h1>
      <div className="eventsList">
        <div className="eventCard">
          <div className="gropupPic">
            <img className='eventProfileImg' src="/assets/person/event1.png" alt="event" />
          </div>
          <div className="eventsDetail">
            <div className="eventsDetailTital">Lorem ipsum dolor sit amet.</div>
            <div className="eventsDetailUploadedBy">
              <h5 className='eventUploderName'>Leena</h5>
            </div>
            <div className="eventCommonDetail">
              <span className='eventsView'>100 Views</span>
              <span className='eventsUploadDate'>2 jan 2023</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
