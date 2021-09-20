import React, { useState } from 'react';
import Home from './pages/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { Maincontainer } from './App.style';
import Profile from './pages/profile/Profile';
import FollowPage from './pages/FollowPage/FollowPage';
function App() {
  return (
    <Maincontainer>
      <SideBar />
      {/* <Home /> */}
      {/* <Profile></Profile> */}
      <FollowPage></FollowPage>
    </Maincontainer>
  );
}

export default App;
