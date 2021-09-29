import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    display: ${props => props.display};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    text-transform: ${props => props.textTransform};
`;

export default function Span(props) {
    return <StyledSpan {...props} />
}