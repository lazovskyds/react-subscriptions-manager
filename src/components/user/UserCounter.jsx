import React from "react";
import styled from "styled-components";


const StyledUserCounter = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #235fbf;
    display: block;
`;

export default function UserCounter({ children }) {
    return <StyledUserCounter>{children}</StyledUserCounter>
}