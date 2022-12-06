import React from "react";
import * as _ from "./style";

export default function Nav() {
  return (
    <>
      <_.NavContainer>
        <_.NavMenu>
          <_.NavMenuText to="/">
            메인
          </_.NavMenuText>
        </_.NavMenu>
        <_.NavMenu>
          <_.NavMenuText to="/board">게시판</_.NavMenuText>
        </_.NavMenu>
        <_.NavMenu>
          <_.NavMenuText to="/introduce">소개</_.NavMenuText>
        </_.NavMenu>
      </_.NavContainer>
    </>
  );
}
