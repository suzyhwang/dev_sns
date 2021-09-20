import styled from "styled-components";

export const Logo = styled.img`
  margin-top: 39px;
  margin-bottom: 32.5px;
  margin-left: 17px;
  width: 42.6px;
  height: 35px;
  left: 439px;
  top: 39px;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 324px;
  height: 912px;
  left: 402px;
  top: 0px;
  padding-left: 37px;
  background: #ffffff;
`;

export const SideBarHome = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  width: 324px;
  height: 54px;
  left: 300px;
  top: 90px;
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
  width: 324px;
  height: 54px;
  left: 300px;
  top: 90px;
  padding-left: 20px;
  padding-right: 11px;
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
  width: 324px;
  height: 54px;
  left: 300px;
  top: 90px;
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
  left: 426px;
  top: 305px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.03em;
  border: none;
  color: #ffffff;
  margin-left: 0px;
  background: #55a3ef;
  box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  margin-top: 30px;
  cursor: pointer;
`;

export const SideBarUserContainer = styled.div`
  padding: 5px 5px 0px 20px;
  position: sticky;
  display: flex;
  flex-direction: row;
  width: 259px;
  height: 54px;
  top: 93vh;
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

export const SideBarUserPhoto = styled.img`
  align-items: stretch;
  flex-basis: auto;
  position: absolute;
  width: 47px;
  height: 47px;
`;

export const SideBarUserId = styled.span`
  position: relative;
  display: inline;
  width: 53px;
  height: 19px;
  left: 65px;
  top: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #000000;
`;

export const SideBarUserEmail = styled.span`
  display: inline;
  width: 163px;
  height: 19px;
  top: 25px;
  left: 13px;
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6f767c;
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
