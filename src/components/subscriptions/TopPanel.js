import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../customized/Input';
import Div from '../customized/Div';
import Button from '../customized/Button';

const StyledTopPanel = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #efefef;
`;

export default function TopPanel({ updateInputText, updateFilter }) {
    const [state, setState] = useState({
        buttons: ['All', 'Important'],
        activeButton: 0
    });

    const onActiveButton = (item, index) => {
        setState({...state, activeButton: index});
        updateFilter(item);
    }

    return (
        <StyledTopPanel>
            <Input
                placeholder="Search by subscription name"
                width="100%"
                height="30px"
                border="none"
                color="#3e3e3e"
                margin="0 20px 0 0"
                onInput={(e) => updateInputText(e.target.value)}
            />

            <Div
                display="flex"
            >
                {state.buttons.map((item, index) => {
                    return <Button
                        padding="0 20px"
                        primary={index === state.activeButton ? true : false}
                        secondary={index !== state.activeButton ? true : false}
                        borderRadius={(index === 0) ? "5px 0 0 5px" : (index === state.buttons.length - 1) ? "0 5px 5px 0" : "0"}
                        key={item}
                        onClick={() => onActiveButton(item, index)}
                    >
                        {item}
                    </Button>
                })}
            </Div>
        </StyledTopPanel>
    )
}