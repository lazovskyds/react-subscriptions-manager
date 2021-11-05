import React from 'react';
import styled from 'styled-components';
import subscriptions from '../../store/subscriptions';
import { Button } from '../elements';
import { UserHeader, UserInfo, UserList, UserListItem } from '.';
import { observer } from 'mobx-react-lite';

import walletIcon from '../../assets/images/user-icons/wallet.png';
import subscriptionsIcon from '../../assets/images/user-icons/subscriptions.png';
import percentIcon from '../../assets/images/user-icons/percent.png';
import costIcon from '../../assets/images/user-icons/cost.png';
import importantIcon from '../../assets/images/user-icons/important.png';


const StyledUser = styled.div`
    height: 100%;
    width: 300px;
    background-color: #efefef;
`;

const User = observer(({ income }) => {
    const userItems = [
        {name: 'Income', value: income === 0 ? 0 : `$${income}`, icon: walletIcon},
        {name: 'Subscriptions',  value: subscriptions.listCounter, icon: subscriptionsIcon},
        {name: 'Important', value: subscriptions.importantCounter, icon: importantIcon},
        {name: 'Cost', value: subscriptions.totalValue === 0 ? 0 : `$${subscriptions.totalValue}`, icon: costIcon},
        {name: 'of income', value: (subscriptions.totalValue / income * 100).toFixed(2), icon: percentIcon}
    ]

    return (
        <StyledUser >
            <UserHeader>
                <UserInfo numberOfSubscriptions={subscriptions.listCounter} />
                <Button
                    margin="10px 0 0 0"
                    onClick={() => subscriptions.removeAllSubscriptions()}
                    primary
                >
                    Remove all subscriptions
                </Button>
            </UserHeader>
            <UserList>
                { userItems.map((item) => (
                    <UserListItem
                        name={item.name}
                        icon={item.icon}
                        value={item.value}
                        key={item.name}
                    />
                )) }
            </UserList>
        </StyledUser>
    )
})

export default User