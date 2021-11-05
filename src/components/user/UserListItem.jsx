import React from 'react';
import styled from 'styled-components';


const StyledUserItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
`;

const StyledUserItemKeyWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledUserItemValue = styled.span`
    font-size: 16px;
    color: #235fbf;
    font-weight: 700;
`;

const StyledUserItemTitle = styled.span`
    font-size: 16px;
    color: #3e3e3e;
    font-weight: 600;
`;

const StyledUserItemIcon = styled.img`
    margin: 0 10px 0 0;
`;


export default function UserItem({ name, icon, value, symbol }) {
    return (
        <StyledUserItem>
            <StyledUserItemKeyWrapper>
                <StyledUserItemIcon src={icon} alt="" />
                <StyledUserItemTitle>{name}:</StyledUserItemTitle>
            </StyledUserItemKeyWrapper>
            <StyledUserItemValue>
                {value}
            </StyledUserItemValue>
        </StyledUserItem>
    )
}