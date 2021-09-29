import React from 'react';
import styled, { css } from 'styled-components';

const StyledImg = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: ${props => props.cursor};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    overflow: ${props => props.overflow};
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};

    ${props => props.btn && css`
        cursor: ${props.cursor || 'pointer'};

        &:last-child {
            margin: 0;
        }
    `};

    ${props => props.disabled && css`
        filter: grayscale(100%);
    `};
`;

export default function Img(props) {
    return <StyledImg {...props} />
}