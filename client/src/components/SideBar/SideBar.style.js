import styled from "styled-components";

export const FixedContainer = styled.div`
  position: fixed;
  width: 1116px;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-content: space-between;
  width: 324px;
  height: 100vh;
  padding-left: 37px;
  background: #ffffff;
`;

export const SideBarTopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-top: 39px;
  margin-bottom: 32.5px;
  margin-left: 17px;
  width: 42.6px;
`;

export const SideBarHome = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  height: 54px;
  padding-left: 20px;
  margin-bottom: 13px;

  span {
    display: inline-block;
    margin-top: 0 auto;
    color: #000000;
    line-height: 27px;
    height: 0px;

    vertical-align: middle;
  }
  :hover {
    width: 135px;
    height: 54px;
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: rgba(226, 226, 226, 0.75);
    border-radius: 30px;
    cursor: pointer;
  }
`;

export const SideBarHomeIcon = styled.img`
  position: relative;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  top: 11px;
  margin-right: 25.5px;
  color: #000000;
`;

export const SideBarExploreIcon = styled.img`
  width: 22.5px;
  height: 22.5px;
  top: 11px;
  margin-right: 26.75px;
  position: relative;
  vertical-align: middle;
`;

export const SideBarProfileIcon = styled.img`
  margin-right: 26.75px;
  position: relative;
  vertical-align: middle;
  top: 11px;
`;

export const SideBarExplore = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  height: 54px;
  padding-left: 20px;
  margin-bottom: 13px;

  span {
    display: inline-block;
    margin-top: 0 auto;
    color: #000000;
    line-height: 27px;
    height: 0px;

    vertical-align: middle;
  }
  :hover {
    width: 135px;
    height: 54px;
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: rgba(226, 226, 226, 0.75);
    border-radius: 30px;
    cursor: pointer;
  }
`;

export const SideBarProfile = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  height: 54px;
  padding-left: 20px;
  margin-bottom: 13px;

  span {
    display: inline-block;
    margin-top: 0 auto;
    color: #000000;
    line-height: 27px;
    height: 0px;

    vertical-align: middle;
  }
  :hover {
    width: 135px;
    height: 54px;
    background: rgba(226, 226, 226, 0.75);
    border-radius: 30px;
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    cursor: pointer;
  }
`;

export const SideBarTweetButton = styled.button`
  width: 259px;
  height: 55px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.03em;
  border: none;
  color: #ffffff;
  background: #55a3ef;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  margin-top: 30px;
  cursor: pointer;
`;

export const SideBarUserContainer = styled.div`
  padding: 5px 5px 0px 20px;
  display: flex;
  height: 54px;
  margin-bottom: 20px;

  :hover {
    width: 259px;
    height: 54px;
    padding: 5px 5px 0px 20px;
    transition-duration: 0.3s;
    transition-property: background-color, box-shadow;
    background: rgba(226, 226, 226, 0.75);
    border-radius: 30px;
    cursor: pointer;
  }
`;

export const SideBarUserPhoto = styled.div`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const SidebarUserIdEmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const SideBarUserId = styled.div`
  flex: 1;
  font-family: Roboto;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  padding-top: 4px;
`;

export const SideBarUserEmail = styled.div`
  flex: 1;
  font-family: Roboto;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #6f767c;
  padding-bottom: 4px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Roboto";
  z-index: 999;
`;
