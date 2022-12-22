import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  position: fixed;
`;

export const DialogBox = styled.dialog`
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const LogInModalWrap = styled.div`

`;

export const CancelBtn = styled.div`
  width: 100%;
  height: 30px;
  .logo {
    margin-left: 420px;
    margin-top: 10px;
    cursor: pointer;
  }
`