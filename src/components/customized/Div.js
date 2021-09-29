import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../responsive';

import background from '../../assets/img/background.png';

const StyledDiv = styled.div`
    position: ${props => props.position};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    height: ${props => props.height};
    max-height: ${props => props.maxHeight};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
    overflow: ${props => props.overflow};
    border-bottom: ${props => props.borderBottom};
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};
    background-repeat: ${props => props.backgroundRepeat};
    background-position: ${props => props.backgroundPosition};
    border-radius: ${props => props.borderRadius};
    white-space: ${props => props.whiteSpace};
    box-shadow: ${props => props.boxShadow};
    transform: ${props => props.transform};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};

    ${props => props.appBackground && css`
        background-image: url(${background});

        @media ${device.notPC} {
            background-repeat: repeat;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `};
    
    ${props => props.userHeader && css`
        background-image: ${props => props.backgroundImage};
    `};

    ${props => props.window && css`
        @media ${device.notPC} {
            display: none;
        }
    `};

    ${props => props.error && css`
        @media ${device.notPC} {
            display: block;
        }
    `};
`;

export default function Div(props) {
    return <StyledDiv {...props} />
}