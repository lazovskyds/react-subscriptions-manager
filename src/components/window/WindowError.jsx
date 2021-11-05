import React from 'react';
import styled from 'styled-components';
import { WindowErrorNote } from '.';
import { device } from '../../responsive';

const StyledWindowError = styled.div`
    display: none;
    padding: 40px 20px;
    margin: 0 20px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;

    @media ${device.notPC} {
        display: block;
    }
`;

export default function WindowError({ children }) {
    return (
        <StyledWindowError>
            <WindowErrorNote>{children}</WindowErrorNote>
        </StyledWindowError>
    )
}