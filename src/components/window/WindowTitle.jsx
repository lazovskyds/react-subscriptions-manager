import React from 'react';
import { device } from '../../responsive';
import styled from 'styled-components';

const StyledWindowTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 60px 0;

    @media ${device.notPC} {
        display: none;
   }
`;

export default function WindowTitle({ children }) {
    return <StyledWindowTitle>{children}</StyledWindowTitle>
}