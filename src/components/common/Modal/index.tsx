import React, { PropsWithChildren } from "react";
import * as _ from "./style"
import { ImCross } from "react-icons/im";
import LogIn from "../../Login";

interface ModalDefaultType {
    onClickToggleModal: () => void;
  }
  

export default function Modal({
    onClickToggleModal,
    children,
  }: PropsWithChildren<ModalDefaultType>) {
    return (
      <_.ModalContainer>
        <_.DialogBox>
          {children}
          <_.LogInModalWrap>
            <_.CancelBtn>
              <ImCross
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
  
                  if (onClickToggleModal) {
                    onClickToggleModal();
                  }
                }}
                className="logo"
              />
            </_.CancelBtn>
            <LogIn/>
          </_.LogInModalWrap>
        </_.DialogBox>
        <_.Backdrop />
      </_.ModalContainer>
    );
  }