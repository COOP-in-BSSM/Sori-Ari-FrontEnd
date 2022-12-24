import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: 70px;
    margin-top: 20px;
`;

export const NavMenu = styled.div`
    width: 110px;
    height: 100%;
`;

export const NavMenuText = styled(Link)`
    display: inline-block;
    width: 60%;
    height: 30px;
    margin-top: 25px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    color: #333;
    text-decoration: none;

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover{
        margin-top: 20px;
        border-bottom: 2px solid #FFD951;
    }
`