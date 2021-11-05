import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 30px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: ${props => props.color ? props.color : props.primary ? '#fff' : props.secondary ? '#235fbf' : 'auto'};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.primary ? '#235fbf' : props.secondary ? '#fff' : 'auto'};
    width: ${props => props.width || '100%'};
    border: ${props => props.border ? props.border : props.secondary ? '1px solid #235fbf' : 'none'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : props.primary || props.secondary ? '5px' : 'none'};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
`;

export default function Button(props) {
    return <StyledButton type="button" {...props} />
}