import React, { ButtonHTMLAttributes } from "react";
import * as _ from "./style";
import Logo from "../../assests/logo.svg";
import Nav from "../Nav";

interface MsgProps {
  text: string;
  onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

function Message({ onClick, text }: MsgProps): JSX.Element {
  return <_.LogInBtn onClick={onClick}>{text}</_.LogInBtn>;
}

function LoginOutBtn() {
  return (
    <Message
      onClick={() => {
        // 로그인 모달창 추가
        console.log("clicked");
      }}
      text="로그인"
    ></Message>
  );
}

const Header = () => {
  return (
    <>
      <_.HeaderContainer>
        <_.LogoImg src={Logo} />
        <Nav />
        <_.LogInWrap>
          <LoginOutBtn />
        </_.LogInWrap>
      </_.HeaderContainer>
    </>
  );
};

export default Header;
