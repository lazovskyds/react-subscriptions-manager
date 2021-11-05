import React from 'react';
import styled, { css } from 'styled-components';
import starBtn from '../../assets/images/actions/star.png';
import trashBtn from '../../assets/images/actions/trash.png';


const StyledListItem = styled.div`
    display: flex;
    padding: 15px 0;
    border-bottom: 2px solid #efefef;

    ${props => props.important && css`
        background-color: #fff7db;
    `}
`;

const StyledListItemValueWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    padding: 0 10px;
    justify-content: center;
    text-align: center;

    &:first-child {
        justify-content: flex-start;
        padding: 0 10px 0 30px;
    }
`;

const StyledListItemIcon = styled.div`
    font-size: 16px;
    color: #3e3e3e;
    font-weight: 600;
    border: 2px solid #235fbf;
    border-radius: 5px;
    padding: 2px 8px;
    margin: 0 6px 0 0;
    text-transform: uppercase;
`;

const StyledListItemValue = styled.span`
    font-size: 16px;
    color: #3e3e3e;
    font-weight: 500;
`;

const StyledActionIcon = styled.img`
    margin: 0 15px 0 0;
    cursor: pointer;

    ${props => props.disabled && css`
        filter: grayscale(100%);
    `}    
`;

export default function ListItem({ name, price, date, removeSubscription, important, onImportant }) {
    return (
        <StyledListItem important={important}>
            <StyledListItemValueWrapper>
                <StyledListItemIcon>
                    {name[0]}
                </StyledListItemIcon>
                <StyledListItemValue>
                    {name}
                </StyledListItemValue>
            </StyledListItemValueWrapper>
            
            <StyledListItemValueWrapper>
                <StyledListItemValue>
                    ${price}
                </StyledListItemValue>
            </StyledListItemValueWrapper>

            <StyledListItemValueWrapper>
                <StyledListItemValue>
                    {date}
                </StyledListItemValue>
            </StyledListItemValueWrapper>

            <StyledListItemValueWrapper>
                <StyledActionIcon
                    src={starBtn}
                    disabled={important}
                    onClick={onImportant}
                />
                <StyledActionIcon
                    src={trashBtn}
                    onClick={removeSubscription}
                />
            </StyledListItemValueWrapper>
        </StyledListItem>
    )
}