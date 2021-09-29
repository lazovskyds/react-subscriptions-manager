import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
    border: ${props => props.border};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    font-size: ${props => props.fontSize || '14px'};

    &:focus {
        outline: none;
    }

    ${props => props.outlined && css`
        border: ${props.border || '2px solid #bcbcbc'};
        border-radius: ${props.borderRadius || '5px'};
        padding: ${props => props.padding || '0 10px'};
        height: ${props => props.height || '30px'};
        color: ${props => props.height || '#3e3e3e'};
    `}
`;

export default function Input(props) {
    return (
        <StyledInput {...props} />
    )
}