import React, { useState } from 'react';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { Maincontainer } from './App.style';
import Profile from './pages/profile/Profile';
import FollowPage from './pages/FollowPage/FollowPage';
import Thread from './pages/Thread/Thread';
import Post from './components/Post/Post';
import { posts, comments } from './dummy/dummy';

function App() {
  return (
    <Maincontainer>
      <SideBar />
      {/* <Thread></Thread> */}

      {/* <Home /> */}
      <Profile></Profile>
      {/* <FollowPage></FollowPage> */}
    </Maincontainer>
  );
}

export default App;
