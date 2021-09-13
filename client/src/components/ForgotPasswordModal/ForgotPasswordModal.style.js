import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto;
`;

export const ModalBackdrop = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalView = styled.div`
  display: flex;
  position: fixed;

  top: 93px;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  -o-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);

  width: 612px;
  height: ${(props) => props.findPassword || '560px'};
  border-radius: 17px;
  background-color: white;
`;
