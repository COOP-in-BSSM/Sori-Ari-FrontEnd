import React from "react";
import * as _ from "./style"

export default function LogIn() {
    return(
        <>
        <_.LoginFormWrap>
            {/* 로그인 폼 구현 */}
            <_.LoginTitle>로그인</_.LoginTitle>
            <_.LoginInput type="id" placeholder="아이디"/>
            <_.LoginInput type="password" placeholder="비밀번호"/>
            <_.ConfirmBtnWrap>
            <_.ConfirmBtn>확인</_.ConfirmBtn>
            </_.ConfirmBtnWrap>
        </_.LoginFormWrap>
        </>
    )
}