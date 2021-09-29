import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    height: 30px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    width: ${props => props.width};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};

    ${props => props.primary && css`
        color: ${props.color || '#fff'};
        background-color: ${props.backgroundColor || '#235fbf'};
        border-radius: ${props.borderRadius || '5px'};
    `}

    ${props => props.secondary && css`
        color: ${props.color || '#235fbf'};
        background-color: ${props.backgroundColor || 'transparent'};
        border: ${props.border || '1px solid #235fbf'};
        border-radius: ${props.borderRadius || '5px'};
    `}
`;

export default function Button(props) {
    return (
        <StyledButton type="button" {...props} />
    )
}