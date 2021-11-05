import React from 'react';
import { AppWrapper } from './app/';
import { User } from './user';
import { Subscriptions } from './subscriptions';
import { WindowTitle, WindowWrapper, WindowError } from './window';

export default function App() {
    const income = 3000

    return (
        <AppWrapper>
            <WindowTitle>Subscriptions manager</WindowTitle>

            <WindowWrapper>
                <User income={income} />
                
                <Subscriptions />
            </WindowWrapper>

            <WindowError>Devices with screen width less than 1100 pixels are not supported</WindowError>
        </AppWrapper>
    )
}