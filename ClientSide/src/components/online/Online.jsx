import "./online.css";

export default function Online({user}) {
  return (
    <>
    <li   className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePic} alt="profilePic" />
        {user.active?  <span className="rightbarOnline"></span> : ""}
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
    </>
  );
}
