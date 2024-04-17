import React from "react";
import { Routes, Route } from "react-router-dom";
//import Register from "./pages/Register";
import Login from "./pages/Login";
//import Posts from "./pages/Posts";
// import FriendShip from "./pages/FriendShip";
// import RequireAuth from "./components/RequireAuth";
// import Layout from "./layout/Layout";
// import Profile from "./pages/Profile";
// import About from "./components/profile/about/About";
// import Overview from "./components/profile/about/Overview";
// import Friends from "./components/profile/friends/Friends";
// import WorkAndEdu from "./components/profile/friends/WorkAndEdu";
// import Contacts from "./components/profile/friends/Contacts";
// import MarketPlace from "./pages/MarketPlace";
// import Chats from "./components/chats/Chat";
// import Notifications from "./pages/Notifications";
// import Requests from "./components/profile/requests/Requests";
// import UsersPosts from "./components/profile/UsersPosts";
// import EditPost from "./components/posts/EditPost";
// import EditPostPage from "./pages/EditPost";
// import Page404 from "./pages/Page-404";
// import Verified from "./pages/Verified";
// import Views from "./components/profile/views/Views";
// import Saved from "./pages/Saved";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
