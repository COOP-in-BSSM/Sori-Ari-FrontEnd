import styled from "styled-components";

export const IntroduceContainer = styled.div`
    width: 100%;
    height: 900px;
`;

export const IntroduceHeader = styled.div`
    width: 100%;
    height: 200px;
`;

export const HeaderIn = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 80px;
`;

export const IntroTItle = styled.div`
    width: 800px;
    height: 150px;
    margin: 0 auto;

    font-family: 'Fredoka One';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    strong{
        font-weight: 900;
    }

    span{
        background-color: #FFF4CE;
    }
`;

export const IntroImg = styled.div`
    width: 100%;
    height: 600px;
    background-color: burlywood;
`;


export const IntroSectionWrap = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 70px;
`;

export const IntroSection = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
`;

export const SectionTitleWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;

`;

export const SectionTitle = styled.div`
    width: 200px;
    height: 80px;
    font-weight: 700;
    font-size: 27px;
    border-right: 3px solid #FFD951;
`;

export const SectionContent = styled.div`
    width: 100%;
    height: 80px;
    margin-left: 30px;

    font-size: 20px;
    font-weight: 400;
    
    p{
        margin: 0;
    }
`;

export const SectionMemberWrap = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
`;

export const SectionServiceWrap = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    /* background-color: cyan; */
`;

export const SectionServiceContent = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 30px;

    font-size: 20px;
    font-weight: 400;
    
    p{
        margin: 0;
    }
`;

export const SectionServiceTitle = styled.div`
    width: 200px;
    height: 80%;
    font-weight: 700;
    font-size: 27px;
    border-right: 3px solid #FFD951;
`;

export const ServiceWrap = styled.div`
    width: 400px;
    height: 80%;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    &:hover{

    }
`;

export const ServiceImg = styled.img`
    margin: 20px;
`

export const ServiceExplain = styled.div`
    width: 350px;
    height: 60px;
    /* background-color: crimson; */
    margin-left: 20px;
    /* padding-top: 10px; */

    font-size: 30px;
    font-weight: 700;
    text-align: center;

    cursor: pointer;
    a:link{
        text-decoration : none;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    p{
        font-size: 16px;
        font-weight: 400;
    }
`;