import React, { useState, useEffect } from 'react';
import Head1 from './customized/Head1';
import User from './user';
import Subscriptions from './subscriptions/';
import Div from './customized/Div';
import Span from './customized/Span';

import userIcon from '../assets/img/user-img.png';
import userBackground from '../assets/img/user-background.png';
import walletIcon from '../assets/img/user-icons/wallet.png';
import subscriptionsIcon from '../assets/img/user-icons/subscriptions.png';
import percentIcon from '../assets/img/user-icons/percent.png';
import costIcon from '../assets/img/user-icons/cost.png';
import importantIcon from '../assets/img/user-icons/important.png';

export default function App() {
    const [subscriptions, setSubscriptions] = useState([
        {name: 'YouTube', price: 7.19, date: 15, important: false, id: 'YouTube'},
        {name: 'Spotify', price: 4.99, date: 7, important: false, id: 'Spotify'},
        {name: 'Netflix', price: 7.99, date: 12, important: true, id: 'Netflix'},
        {name: 'Yandex', price: 2, date: 20, important: false, id: 'Yandex'}
    ]);

    const [userData, setUserData] = useState({
        userImages: {
            icon: userIcon,
            background: userBackground
        },
        userDataItems: []
    });

    const [state, setState] = useState({
        inputValue: '',
        filter: ''
    });

    const removeAllSubs = () => setSubscriptions([]);

    const removeSubscription = (id) => {
        const index = subscriptions.findIndex(item => item.id === id);
        const before = subscriptions.slice(0, index);
        const after = subscriptions.slice(index + 1, subscriptions.length);
        const newArray = before.concat(after);

        setSubscriptions(newArray);
    }

    const onImportant = (id) => {
        const index = subscriptions.findIndex(item => item.id === id);
        const before = subscriptions.slice(0, index);
        const after = subscriptions.slice(index + 1, subscriptions.length);
        const oldItem = subscriptions[index];
        const newItem = {...oldItem, important: !oldItem.important};
        const newArr = before.concat(newItem, after);

        setSubscriptions(newArr);
    }

    const onInputChange = (value) => {
        if (value.length > 0) {
            return subscriptions.filter(item => {
                return item.name.toLowerCase().includes(value);
            });
        } else {
            return subscriptions;
        }
    }

    const updateInputText = (value) => setState({...state, inputValue: value});

    const updateFilter = (value) => setState({...state, filter: value});

    const postSubscription = (object) => {
        const arr = subscriptions.filter(item => item.id === object.id);

        if(arr.length === 0) {
            setSubscriptions([...subscriptions, object]);
        }
    }

    const userDataCreator = (subscriptionValue, importantValue, costValue, ofIncomeValue) => ({
        ...userData,
        userDataItems: [
            {name: 'Income', value: 2450, icon: walletIcon},
            {name: 'Subscriptions',  value: subscriptionValue || 0, icon: subscriptionsIcon},
            {name: 'Important', value: importantValue || 0, icon: importantIcon},
            {name: 'Cost', value: costValue || 0, icon: costIcon},
            {name: 'of income', value: ofIncomeValue || 0, icon: percentIcon}
        ]
    });

    const updateUserData = () => {
        if (subscriptions.length > 0) {
            const updateImportantSubs = subscriptions.filter((item) => item.important).length;
            const getArrayOfSubsPrice = subscriptions.map(item => item.price);
            const updateCostOfSubs = getArrayOfSubsPrice.reduce((sum, item) => sum + item).toFixed(2);
            const updatePercentOfIncome = () => (updateCostOfSubs / 2450 * 100).toFixed(2);
            
            setUserData(() => userDataCreator(subscriptions.length, updateImportantSubs, updateCostOfSubs, updatePercentOfIncome()))

        } else {            
            setUserData(() => userDataCreator())
        }
    }

    const filteredSubscriptions = (array, filter) => {
        switch(filter) {
            case 'Important':
                return array.filter(item => item.important)
            default:
                return array;
        }
    }

    const visibleSubs = filteredSubscriptions(onInputChange(state.inputValue.toLowerCase()), state.filter);
    
    useEffect(updateUserData, [subscriptions]);

    return (
        <Div
            appBackground
            width="100%"
            height="100vh"
            backgroundColor="#dedede"
            backgroundRepeat="no-repeat"
            backgroundPosition="top"
        >
            <Head1>Subscriptions manager</Head1>
            <Div
                window
                display="flex"
                width="1000px"
                height="450px"
                backgroundColor="#fff"
                margin="0 auto"
                borderRadius="10px"
                overflow="hidden"
                boxShadow="6px 6px 10px 0px rgba(82, 82, 82, 0.2)"
            >
                <User
                    userData={userData}
                    numberOfSubscriptions={subscriptions.length}
                    removeAllSubs={removeAllSubs}
                />
                <Subscriptions
                    subscriptions={visibleSubs}
                    onImportant={id => onImportant(id)}
                    removeSubscription={id => removeSubscription(id)}
                    updateInputText={value => updateInputText(value)}
                    updateFilter={value => updateFilter(value)}
                    postSubscription={object => postSubscription(object)}
                />
            </Div>
            <Div
                error
                display="none"
                padding="40px 20px"
                margin="0 20px"
                borderRadius="10px"
                backgroundColor="#fff"
                textAlign="center"
            >
                <Span
                    fontSize="18px"
                    fontWeight="600"
                    color="#3e3e3e"
                >
                    Devices with screen width less than 1100 pixels are not supported
                </Span>
            </Div>
        </Div>
    )
}