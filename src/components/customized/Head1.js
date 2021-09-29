import React from 'react';
import { device } from '../../responsive';
import styled from 'styled-components';

const StyledHead1 = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 60px 0;

    @media ${device.notPC} {
        display: none;
    }
`;

export default function Head1(props) {
    return <StyledHead1 {...props} />
}