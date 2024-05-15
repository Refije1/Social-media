import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import classes from "./styles/Profile.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/slices/authSlice";
import {
  fetchUserProfile,
  selectProfilePageUser,
  selectProfilePageUserStatus,
} from "../store/slices/profileSlice";
import { FiCamera } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { selectPosts } from "../store/slices/postsSlice";
import EditProfileModal from "../components/profile/editProfile/EditProfileModal";
import logo from "../assets/images/userSvg2.svg";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profilePageUserStatus = useSelector(selectProfilePageUserStatus);
  const allPosts = useSelector(selectPosts);
  const profilePageUser = useSelector(selectProfilePageUser);
  const loggedInUser = useSelector(selectUser);

  const userId = loggedInUser?._id;
  const profileUserId = profilePageUser?._id;

  const userPosts = allPosts?.filter((post) => post?.userId === profileUserId);

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  return (
    <div className={classes.Profile}>
      <section className={classes["profile-header"]}>
        <div className={classes.cover}>
          <label
            className={classes["cover-photo-uploader"]}
            htmlFor="profile-photo"
          >
            <FiCamera />
            <p>Add a cover photo</p>
            <input
              type="file"
              accept="images/*"
              name="profile-photo"
              id="profile-photo"
            />
          </label>

          <div className={classes["profile-pic"]}>
            <img
              src={
                profilePageUser?.profilePicture?.length === 0
                  ? logo
                  : profilePageUser?.profilePicture
              }
              alt=""
            />
            <label
              className={classes["profile-photo-uploader"]}
              htmlFor="profile-photo"
            >
              <FiCamera />
              <input
                type="file"
                accept="images/*"
                name="profile-photo"
                id="profile-photo"
              />
            </label>
          </div>
        </div>
      </section>
      <section className={classes["profile-info"]}>
        <div className={classes["info-width-controller"]}>
          <div>
            <button onClick={handleOpenEditProfileModal}>
              Edit Profile
            </button>
            <EditProfileModal
              isOpen={isEditProfileModalOpen}
              onClose={handleCloseEditProfileModal}
            />
          </div>
        </div>
        <div className={classes.profileData}>
          <h3>
            {profilePageUser?.firstName} {profilePageUser?.lastName}
          </h3>
          <p className={classes.friendsData}>
            <strong className={classes.friendsNum}>
              {profilePageUser?.friends?.length}
            </strong>{" "}
            Friends
          </p>
          <p className={classes.friendsData}>
            <strong className={classes.friendsNum}>{userPosts.length}</strong>{" "}
            Posts
          </p>
        </div>
      </section>
      <div className={classes["content-options"]}>
        <div className={classes["navlink-holder"]}>
          <NavLink to="" end>
            Posts
          </NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"friends"}>Friends</NavLink>
          {profilePageUser?._id === loggedInUser?._id && (
            <NavLink to={"requests"}>Requests</NavLink>
          )}
          {profilePageUser?._id === loggedInUser?._id && (
            <NavLink to={"views "}>Profile Views</NavLink>
          )}
        </div>
      </div>
      <div className={classes["profile-outlet"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
