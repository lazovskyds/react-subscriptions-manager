import React from 'react';
import userIcon from '../../assets/images/user-img.png';
import { UserName, UserCounter, UserIcon } from '.';

export default function UserInfo({ numberOfSubscriptions }) {
    return (
        <>
            <UserIcon src={userIcon} />
            <div>
                <UserName>John Smith</UserName>
                <UserCounter>{`${numberOfSubscriptions} subscriptions`}</UserCounter>
            </div>
        </>
    )
}