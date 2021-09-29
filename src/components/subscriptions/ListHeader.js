import React from 'react';
import styled from 'styled-components';
import Div from '../customized/Div';
import Span from '../customized/Span';

const StyledListHeader = styled.div`
    display: flex;
    border-bottom: 2px solid #a7bfe5;
    padding: 15px 0;
`;

export default function ListHeader() {
    return (
        <StyledListHeader>
            <Div
                width="25%"
                textAlign="center"
            >
                <Span
                    fontSize="18px"
                    color="#3e3e3e"
                    fontWeight="600"
                >
                    Service
                </Span>
            </Div>
            
            <Div
                width="25%"
                textAlign="center"
            >
                <Span
                    fontSize="18px"
                    color="#3e3e3e"
                    fontWeight="600"
                >
                    Price
                </Span>
            </Div>

            <Div
                width="25%"
                textAlign="center"
            >
                <Span
                    fontSize="18px"
                    color="#3e3e3e"
                    fontWeight="600"
                >
                    Date
                </Span>
            </Div>

            <Div
                width="25%"
                textAlign="center"
            >
                <Span
                    fontSize="18px"
                    color="#3e3e3e"
                    fontWeight="600"
                >
                    Actions
                </Span>
            </Div>
        </StyledListHeader>
    )
}