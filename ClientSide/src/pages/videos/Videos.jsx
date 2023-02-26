import React from 'react'
import './videos.css'
export default function Videos() {
  return (
    <>
    <div className="videosComponent">
      <h1>Videos For You</h1>
      <div className="videosLists">
      
        <div className="videoCard">
          <div className="vidioThumbnail">
            <img className='vidioThumbnailImg' src="/assets/person/video.png" alt="" />
          </div>
          <div className="videosDetail">
            <div className="videosDetailTital">Lorem ipsum dolor sit amet.</div>
            <div className="videosDetailUploadedBy">
              <h5 className='VideoUploderName'>Leena</h5>
            </div>
            <div className="videoCommonDetail">
              <span className='VideosView'>100 Views</span>
              <span className='videosUploadDate'>2 jan 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
