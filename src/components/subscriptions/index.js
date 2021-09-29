import React from 'react';
import TopPanel from './TopPanel';
import BottomPanel from './BottomPanel';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import Div from '../customized/Div';

export default function Subscriptions({ subscriptions, removeSubscription, onImportant, updateInputText, updateFilter, postSubscription }) {
    return (
        <Div
            display="flex"
            flexDirection="column"
            position="relative"
            width="700px"
            height="100%"
        >
            <TopPanel
                updateInputText={value => updateInputText(value)}
                updateFilter={value => updateFilter(value)}
            />

            <ListHeader />

            <Div
                overflow="auto"
                whiteSpace="nowrap"
                height="100%"
            >

                {subscriptions.map(item => {
                    return <ListItem
                        name={item.name}
                        price={item.price}
                        date={item.date}
                        key={item.id}
                        important={item.important}
                        removeSubscription={() => removeSubscription(item.id)}
                        onImportant={() => onImportant(item.id)}
                    />
                })}

            </Div>

            <BottomPanel postSubscription={object => postSubscription(object)} />
            
        </Div>
    )
}