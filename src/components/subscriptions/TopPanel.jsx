import React, { useState } from 'react';
import styled from 'styled-components';
import subscriptions from '../../store/subscriptions';
import { Button } from '../elements';


const StyledTopPanel = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #efefef;
`;

const StyledStatusToggler = styled.div`
    display: flex;
`;

const StyledTopPanelSearch = styled.input`
    width: 100%;
    height: 30px;
    border: none;
    color: #3e3e3e;
    margin: 0 20px 0 0;

    &:focus {
        outline: none;
    }
`;

export default function TopPanel() {
    const [buttons, setButtons] = useState({
        list: ['All', 'Important'],
        activeButtonIndex: 0
   });

    const onActiveButton = (item, index) => {
        setButtons({...buttons, activeButtonIndex: index});
        subscriptions.updateStatusToggler(item.toUpperCase());
   }

    return (
        <StyledTopPanel>
            <StyledTopPanelSearch
                placeholder="Search by subscription name"
                onInput={(e) => subscriptions.updateFilter(e.target.value)}
            />

            <StyledStatusToggler>
                { buttons.list.map((item, index) => (
                    <Button
                        padding="0 20px"
                        primary={index === buttons.activeButtonIndex ? true : false}
                        secondary={index !== buttons.activeButtonIndex ? true : false}
                        borderRadius={index === 0 ? "5px 0 0 5px" : index === buttons.list.length - 1 ? "0 5px 5px 0" : "0"}
                        key={item}
                        onClick={() => onActiveButton(item, index)}
                    >
                        {item}
                    </Button>
                )) }
            </StyledStatusToggler>
        </StyledTopPanel>
    )
}