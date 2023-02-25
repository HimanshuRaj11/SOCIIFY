import "./profile.css";
// import Topbar from "../../components/topbar/Topbar";
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {BiAddToQueue} from 'react-icons/bi'
export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profileTop">
          <div className="coverPicBox"><img className="coverPic" src="/assets/person/post1.jpeg" alt="CoverPost" /></div>
          <div className="profileBox">
              <div className="follow">25k Followers</div>
              <img className="profilePic" src="/assets/person/pic2.jpg" alt="ProfilePic" />
              <div className="follow"> 258 Following</div>
            </div>
            <div className="ProfileName">Linna watson</div>
        </div>
        <div className="profileBio">
          <div className="profileBioText">
              BE SOMEBODY WHO IS
              IMPOSSIBLE TO
              REPLACE
          </div>
        </div>
        <hr className="postHr" />
        <div className="profilePosts">
          <div className="profilePost">
            <div className="profilePostHeading">
              <div className="postIcons">
                <div className="postIcon">
                  <BsGrid3X3GapFill /><span className="postIconText"> 20 POST</span>
                </div>
                <div className="postIcon">
                  <BiAddToQueue /> <span className="PostIconText">SAVED</span>
                </div>
              </div>
            </div>
          </div>
          <div className="PostItems">
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
            <div className="postItem">
              <img className="postItemImg" src="/assets/person/pic2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
