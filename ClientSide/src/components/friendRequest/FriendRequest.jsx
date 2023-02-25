import React from "react";
import "./friendRequest.css";
import { ImCross } from "react-icons/im";
export default function FriendRequest(props) {
  const toggle = () => {
    props.toggleF();
  };
  return (
    <div className="FriendRequest">
      <div className="FriendRequestCross">
        <span onClick={toggle} className="FriendRequestTopRightIconBox">
          <ImCross className="FriendRequestTopRightIcon" />
        </span>
      </div>
      <div className="FriendsBox">
        <div className="FriendRequestBox">
          <h1 className="FriendsBoxHead">Friend Requests</h1>
          <hr className="FriendsBoxHr" />
          <div className="BoxScroll FriendRequestList">
            <div className="FriendRequestListCard">
              <div className="profileImgBox">
                <img
                  className="RequestProfileImg"
                  src="assets/person/pic2.jpg"
                  alt=""
                />
              </div>
              <div className="profileDetainBox">
                <div className="name">Hello Dear</div>
                <div className="buttonsAction">
                  <button className="AcceptButton ActionButton">Accept</button>
                  <button className="DeleteButton ActionButton">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="friendSuggestionBox">
          <h1 className="FriendsBoxHead">Suggestion For you</h1>
          <hr className="FriendsBoxHr" />
          <div className="BoxScroll friendSuggestionList">
            <div className="FriendRequestListCard">
              <div className="profileImgBox">
                <img className="RequestProfileImg" src="assets/person/pic2.jpg" alt=""/>
              </div>
              <div className="profileDetainBox">
                <div className="name">Hello Dear</div>
                <div className="buttonsAction">
                  <button className="SendRequestButton ActionButton">Send Request</button>
                  <button className="DeleteButton ActionButton">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
