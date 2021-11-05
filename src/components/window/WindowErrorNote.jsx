import React from 'react';
import styled from 'styled-components';

const StyledWindowErrorNote = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #3e3e3e;
`;

export default function WindowErrorNote({ children }) {
    return <StyledWindowErrorNote>{children}</StyledWindowErrorNote>
}