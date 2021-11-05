import React from "react";
import styled from "styled-components";


const StyledUserIcon = styled.img`
    border: 3px solid #235fbf;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 0 10px 0 0;
`;

export default function UserIcon(props) {
    return <StyledUserIcon {...props}/>
}