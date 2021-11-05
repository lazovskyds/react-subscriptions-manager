import React from "react";
import styled from "styled-components";

const StyledUserDataList = styled.div`
    width: 300px;
    padding: 20px 40px;
`;

export default function UserDataList({ children }) {
    return <StyledUserDataList>{children}</StyledUserDataList>
}