import "./rightbar.css";
import Online from "../online/Online";

import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="/assests/gift.png" alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
      </div>
      <img className="rightbarAd" src="/assests/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
        {/* <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li> */}
        {/* <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              className="rightbarProfileImg"
              src="/assests/person/4 (1).jpeg"
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Kavya</span>
        </li> */}
      </ul>
      </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            src="assests/person/1 (3).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assests/person/1 (3).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assests/person/4 (1).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assests/person/2 (1).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assests/person/2 (1).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img
            src="assests/person/10 (1).jpeg"
            alt=""
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  );
};
return (
  <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  </div>
);
}