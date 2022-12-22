import React, { ButtonHTMLAttributes, useCallback, useState } from "react";
import * as _ from "./style";
import Logo from "../../assests/logo.svg";
import Nav from "../Nav";
import Modal from "../Modal";

interface MsgProps {
  text: string;
  onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

function Message({ onClick, text }: MsgProps): JSX.Element {
  return <_.LogInBtn onClick={onClick}>{text}</_.LogInBtn>;
}

const Header = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  function LoginOutBtn() {
    return (
      <>
        {isLogin ? (
          <Message
            onClick={
              // 로그인 모달창 추가
              onClickToggleModal
            }
            text="로그아웃"
          ></Message>
        ) : (
          <Message
            onClick={
              // 로그인 모달창 추가
              onClickToggleModal
            }
            text="로그인"
          ></Message>
        )}
      </>
    );
  }

  return (
    <>
      <_.HeaderContainer>
        <_.LogoImg src={Logo} />
        <Nav />
        <_.LogInWrap>
          <LoginOutBtn />
        </_.LogInWrap>
      </_.HeaderContainer>
      {isOpenModal && <Modal onClickToggleModal={onClickToggleModal}></Modal>}
    </>
  );
};

export default Header;
