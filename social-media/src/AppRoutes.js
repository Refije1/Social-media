import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import RequireAuth from "./components/RequireAuth";
import Layout from "./layout/Layout";
import Profile from "./pages/Profile";
import About from "./components/profile/about/About";
import Overview from "./components/profile/about/Overview";
import WorkAndEdu from "./components/profile/friends/WorkAndEdu";
import Contacts from "./components/profile/friends/Contacts";
import MarketPlace from "./pages/MarketPlace";
import Notifications from "./pages/Notifications";
import UsersPosts from "./components/profile/UsersPosts";
import EditPost from "./components/posts/EditPost";
import EditPostPage from "./pages/EditPost";
import Page404 from "./pages/Page-404";
import Saved from "./pages/Saved";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/layout" element={<RequireAuth component={Layout} />} />
      
      <Route path="/" element={<RequireAuth component={Layout} />}>
        <Route index element={<RequireAuth component={Posts} />} />
        <Route path="/saved" element={<RequireAuth component={Saved} />} />
        <Route path="/posts/:postId" element={<EditPost />} />
        <Route path="/notifications" element={<RequireAuth component={Notifications} />} />
        <Route path="/marketplace" element={<RequireAuth component={MarketPlace} />} />
        
        <Route path="/id/:idNumber" element={<Profile />}>
          <Route index element={<UsersPosts />} />
          <Route path="about" element={<About />}>
            <Route index element={<Overview />} />
            <Route path="work-and-education" element={<WorkAndEdu />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="photos" element={<h1>Coming soon!</h1>} />
        </Route>
        <Route path="/edit/:postId" element={<RequireAuth component={EditPostPage} />} />
      </Route>

      <Route path="/404" element={<RequireAuth component={Page404} />} />
      <Route path="*" element={<RequireAuth component={Page404} />} />
    </Routes>
  );
};

export default AppRoutes;
