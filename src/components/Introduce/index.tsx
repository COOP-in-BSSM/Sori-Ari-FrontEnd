import React from "react";
import * as _ from "./style";
import Service from "../assests/service.svg";
import { Link } from "react-router-dom";

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
        
        {/* COOP 외부 활동 이미지 삽입 */}
        <_.IntroImg></_.IntroImg>

        <_.IntroSectionWrap>
          <_.IntroSection>

            <_.SectionTitleWrap>
              <_.SectionTitle>COOP</_.SectionTitle>
              <_.SectionContent>
                저희 COOP는 부산 소프트웨어 마이스터 고등학교 내에서 운영되고 있는 '사회적 협동 조합'이며, 
                <p>학생들에게 건강하고 안전한 먹거리를 제공하기위해 노력합니다.</p>
              </_.SectionContent>
            </_.SectionTitleWrap>

            <_.SectionMemberWrap>
              <_.SectionTitle>Member</_.SectionTitle>
              <_.SectionContent>
                  팀장 : 팀장명
                  <p>팀원1 | 팀원2 | 팀원3 | 팀원4 | 팀원5 | 팀원6 | 팀원7 | 팀원8 | 팀원9</p>
              </_.SectionContent>
            </_.SectionMemberWrap>

            {/* 현재 COOP에서 서비스 중인 것 소개하기 */}
            <_.SectionServiceWrap>
              <_.SectionServiceTitle>Service</_.SectionServiceTitle>
              <_.SectionServiceContent>
                  <_.ServiceWrap>
                    <_.ServiceImg src={Service}/>
                     <_.ServiceExplain>
                      <a 
                      href="https://gift-certificate-client.vercel.app/"
                      style={{color : "#333"}}
                      >
                      협동 조합 상품권 서비스
                      </a>
                      <p>개발자 | 개발자 명</p>
                    </_.ServiceExplain>
                  </_.ServiceWrap>
              </_.SectionServiceContent>
            </_.SectionServiceWrap>


          </_.IntroSection>
        </_.IntroSectionWrap>


      </_.IntroduceContainer>
    </>
  );
};

export default Introduce;
