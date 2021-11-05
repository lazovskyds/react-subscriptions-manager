import React from "react";
import styled from "styled-components";
import userBackground from '../../assets/images/user-background.png';


const StyledUserHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-position: center center;
    padding: 40px;
    background-image: url(${userBackground});
`;

export default function UserHeader({ children }) {
    return <StyledUserHeader>{children}</StyledUserHeader>
}