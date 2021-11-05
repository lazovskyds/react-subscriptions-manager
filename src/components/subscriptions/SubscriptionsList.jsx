import React from 'react';
import styled from 'styled-components';
import { SubscriptionsListItem } from '.';
import subscriptions from '../../store/subscriptions';
import { observer } from 'mobx-react-lite';


const StyledSubscriptionsList = styled.div`
    overflow: auto;
    white-space: nowrap;
    height: 100%;
`;

const SubscriptionsList = observer(() => {
    return (
        <StyledSubscriptionsList>
            { subscriptions.visibleSubscriptions.map(item => (
                <SubscriptionsListItem
                    name={item.name}
                    price={item.price}
                    date={item.date}
                    key={item.id}
                    important={item.important}
                    removeSubscription={() => subscriptions.removeSubscription(item.id)}
                    onImportant={() => subscriptions.toggleImportantStatus(item.id)}
                />
            )) }
        </StyledSubscriptionsList>
    )
})

export default SubscriptionsList;