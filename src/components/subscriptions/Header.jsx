import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.div`
    display: flex;
    border-bottom: 2px solid #a7bfe5;
    padding: 15px 0;
`;

const StyledHeaderColumn = styled.div`
    width: 25%;
    text-align: center;
`;

const StyledHeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #3e3e3e;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderColumn>
                <StyledHeaderTitle>
                    Service
                </StyledHeaderTitle>
            </StyledHeaderColumn>
            
            <StyledHeaderColumn>
                <StyledHeaderTitle>
                    Price
                </StyledHeaderTitle>
            </StyledHeaderColumn>

            <StyledHeaderColumn>
                <StyledHeaderTitle>
                    Date
                </StyledHeaderTitle>
            </StyledHeaderColumn>

            <StyledHeaderColumn>
                <StyledHeaderTitle>
                    Actions
                </StyledHeaderTitle>
            </StyledHeaderColumn>
        </StyledHeader>
    )
}