import React from 'react';
import Div from '../customized/Div';
import UserInfo from './UserInfo';
import Button from '../customized/Button';
import UserDataItem from './UserDataItem';


export default function User({ userData, removeAllSubs, numberOfSubscriptions }) {
    const {userDataItems, userImages} = userData;

    return (
        <Div
            height="100%"
            width="300px"
            backgroundColor="#efefef"
        >
            <Div
                userHeader
                backgroundImage={`url(${userImages.background})`}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                backgroundPosition="center center"
                padding="40px"

            >
                <UserInfo
                    numberOfSubscriptions={numberOfSubscriptions}
                    userIcon={userImages.icon}
                />
                <Button
                    primary
                    width="100%"
                    margin="10px 0 0 0"
                    onClick={removeAllSubs}
                >
                    Remove all subscriptions
                </Button>
            </Div>
            <Div
                width="300px"
                padding="20px 40px"
            >
                {userDataItems.map((item) => {
                    return <UserDataItem
                        symbol={item.name === 'Income' ? true : item.name === 'Cost'? true : false}
                        name={item.name}
                        icon={item.icon}
                        value={item.value}
                        key={item.name}
                    />
                })}
            </Div>
        </Div>
    )
}