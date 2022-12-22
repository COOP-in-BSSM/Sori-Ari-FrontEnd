import React from "react";
import * as _ from "./style";

const Introduce = () => {
  return (
    <>
    {/* 소개페이지 생성 */}
      <_.IntroduceContainer>
        <_.IntroduceHeader>
          <_.HeaderIn>
          <_.IntroTItle>안녕하세요, 부산소프트웨어마이스터 고등학교 <div><span>사회적 협동 조합</span> <strong>COOP</strong>입니다.</div></_.IntroTItle>
          </_.HeaderIn>
        </_.IntroduceHeader>
        
          {/* COOP 외부 이미지 삽입 */}
        <_.IntroImg></_.IntroImg>
      </_.IntroduceContainer>
    </>
  );
};

export default Introduce;
