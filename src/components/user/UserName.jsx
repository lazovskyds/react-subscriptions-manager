import React from 'react';
import styled from 'styled-components';

const StyledUserName = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: #3e3e3e;
    display: block;
`;

export default function UserName({ children }) {
    return <StyledUserName>{children}</StyledUserName>
}