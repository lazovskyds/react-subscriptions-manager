import React from 'react';
import styled from 'styled-components';
import { TopPanel, BottomPanel, Header, SubscriptionsList } from '.';


const StyledSubscriptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: 100%;
`;

export default function Subscriptions({ updateInputText, postSubscription }) {
    return (
        <StyledSubscriptions>
            <TopPanel
                updateInputText={value => updateInputText(value)}
            />

            <Header />

            <SubscriptionsList />

            <BottomPanel postSubscription={object => postSubscription(object)} />
            
        </StyledSubscriptions>
    )
}