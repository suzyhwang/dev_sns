import styled from 'styled-components';

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
