import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector(state => state.profile);

  return (
      <>
        <div>
          <Link to="/tuiter">
            <div className="float-start mt-2"><i className="bi bi-arrow-left-short fs-4 text-black"></i></div>
          </Link>
          <div className="ms-5">
            <h4 className="fw-bold m-0">{profile.firstName} {profile.lastName}</h4>
            <p className="text-secondary m-o">1,314 Tuits</p>
          </div>
        </div>

        <div className="position-relative mt-2">
          <img className="w-100" src={`../images/${profile.bannerPicture}`}/>
          <img className="position-absolute rounded-circle"
               style={{"height": "50%", "width": "25%", "left": "5%", "bottom": "-25%"}}
               src={`../images/${profile.profilePicture}`}/>
        </div>

        <Link to="/tuiter/edit-profile" className="clearfix">
          <button className="btn fw-bold rounded-pill float-end mt-2 border">Edit Profile</button>
        </Link>

        <div className="mt-5">
          <h3 className="m-0">{profile.firstName} {profile.lastName}</h3>
          <p className="text-secondary">@{profile.handle}</p>
          <p>{profile.bio}</p>
          <p className="text-secondary">
            <i className="bi bi-geo-alt pe-1"></i>{profile.location}
            <i className="bi bi-balloon ms-2 pe-1"></i>Born {profile.dateOfBirth}
            <i className="bi bi-calendar ms-2 pe-1"></i>Joined {profile.dateJoined}
          </p>
          <p>
            <span className="fw-bold">{profile.followingCount}</span> <label className="text-secondary">Following</label>
            <span className='fw-bold ms-3'>{profile.followersCount}</span> <label className="text-secondary">Followers</label>
          </p>
        </div>

      </>
  );
};
export default ProfileComponent;