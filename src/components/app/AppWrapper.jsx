import React from "react";
import styled from "styled-components";
import background from '../../assets/images/background.png';
import { device } from '../../responsive';

const StyledAppWrapper = styled.div`
    background-image: url(${background});
    width: 100%;
    height: 100vh;
    background-color: #dedede;
    background-repeat: no-repeat;
    background-position: top;

    @media ${device.notPC} {
        background-repeat: repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default function AppWrapper({ children }) {
    return <StyledAppWrapper>{children}</StyledAppWrapper>
}