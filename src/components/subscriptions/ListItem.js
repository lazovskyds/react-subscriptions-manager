import React from 'react';
import styled, { css } from 'styled-components';
import Div from '../customized/Div';
import Span from '../customized/Span';
import Img from '../customized/Img';
import starBtn from '../../assets/img/actions/star.png';
import trashBtn from '../../assets/img/actions/trash.png';

const StyledListItem = styled.div`
    display: flex;
    padding: 15px 0;
    border-bottom: 2px solid #efefef;

    ${props => props.important && css`
        background-color: #fff7db;
    `}
`;

export default function ListItem({ name, price, date, removeSubscription, important, onImportant }) {
    return (
        <StyledListItem
            important={important}
        >
            <Div
                display="flex"
                alignItems="center"
                width="25%"
                padding="0 10px 0 30px"
                textAlign="center"
            >
                <Span
                    fontSize="16px"
                    color="#3e3e3e"
                    fontWeight="600"
                    border="2px solid #235fbf"
                    borderRadius="5px"
                    padding="2px 8px"
                    margin="0 6px 0 0"
                    textTransform="uppercase"
                >
                    {name[0]}
                </Span>
                <Span
                    fontSize="16px"
                    color="#3e3e3e"
                    fontWeight="500"
                >
                    {name}
                </Span>
            </Div>
            
            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="25%"
                padding="0 10px"
                textAlign="center"
            >
                <Span
                    fontSize="16px"
                    color="#3e3e3e"
                    fontWeight="500"
                >
                    ${price}
                </Span>
            </Div>

            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="25%"
                padding="0 10px"
                textAlign="center"
            >
                <Span
                    fontSize="16px"
                    color="#3e3e3e"
                    fontWeight="500"
                >
                    {date}
                </Span>
            </Div>

            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="25%"
                padding="0 10px"
                textAlign="center"
            >
                <Img
                    btn
                    src={starBtn}
                    margin="0 15px 0 0"
                    disabled={important}
                    onClick={onImportant}
                />
                <Img
                    btn
                    src={trashBtn}
                    margin="0 15px 0 0"
                    onClick={removeSubscription}
                />
            </Div>
        </StyledListItem>
    )
}