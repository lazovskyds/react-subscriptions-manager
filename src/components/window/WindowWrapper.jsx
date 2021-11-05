import React from 'react';
import { device } from '../../responsive';
import styled from 'styled-components';

const StyledWindowWrapper = styled.div`
    display: flex;
    width: 1000px;
    height: 450px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 6px 6px 10px 0px rgba(82, 82, 82, 0.2);

    @media ${device.notPC} {
        display: none;
    }
`;

export default function WindowWrapper({ children }) {
    return <StyledWindowWrapper>{children}</StyledWindowWrapper>
}