import "./profile.css";
// import Topbar from "../../components/topbar/Topbar";
import {BsGrid3X3GapFill} from 'react-icons/bs'
import {BiAddToQueue} from 'react-icons/bi'
import { useParams} from 'react-router-dom';
import {Users} from '../../DummyData'
import {PostUser1} from '../../DummyUsersPost'

export default function Profile({match}) {
  // const {id} = useParams();
  const User = Users.filter((u=>u.id===5))

  const UserName = User[0].username;
  const coverPic = User[0].CoverPic;
  const ProfilePic = User[0].profilePic;
  const Fowllower = User[0].Followers;
  const following = User[0].Following;

  function PostPhotos(p){
      return (
            <div key={p.id} className="postItem">
              <img  className="postItemImg" src={p.photo} alt="" />
            </div>

      )
  }

  return (
    <>
      <div className="profile">
        <div className="profileTop">
          <div className="coverPicBox"><img className="coverPic" src={coverPic} alt="CoverPost" /></div>
          <div className="profileBox">
              <div className="follow">{Fowllower} Followers</div>
              <img className="profilePic" src={ProfilePic} alt="ProfilePic" />
              <div className="follow"> {following} Following</div>
            </div>
            <div className="ProfileName">{UserName}</div>
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
          { PostUser1.map((p)=>(PostPhotos(p)))}
          </div>
        </div>
      </div>
    </>
  );
}
