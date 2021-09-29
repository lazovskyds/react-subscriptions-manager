import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: ${props => props.display};
`;

export default function Form(props) {
    return <StyledForm {...props} />
}