import React, { useState } from 'react';
import styled from 'styled-components';
import subscriptions from '../../store/subscriptions';
import { Button } from '../elements';

const StyledBottomPanel = styled.div`
    display: flex;
    align-content: flex-end;
    background-color: #fff;
    padding: 10px 20px;
    border-top: 2px solid #a7bfe5;
`;

const StyledBottomPanelInput = styled.input`
    border: ${props => props.error ? '2px solid red' : props.bottomPanel ? '2px solid #bcbcbc' : 'none'};
    width: ${props => props.bottomPanel ? '25%' : 'auto'};
    height: ${props => props.bottomPanel ? '30px' : 'auto'};
    margin: ${props => props.bottomPanel ? '0 20px 0 0' : '0'};
    padding: ${props => props.bottomPanel ? '0 10px' : '0'};
    color: ${props => props.bottomPanel ? '#3e3e3e' : 'auto'};
    border-radius: ${props => props.bottomPanel ? '5px' : 'none'};
    font-size: ${props => props.fontSize || '14px'};

    &:focus {
        outline: none;
    }
`;

const StyledBottomPanelForm = styled.form`
    display: ${props => props.display};
`;

export default function BottomPanel({ postSubscription }) {
    const [subscription, setSubscription] = useState({
        name: undefined,
        price: undefined,
        date: undefined,
        important: false,
        id: undefined
   });

    const [errors, setErrors] = useState({
        name: false,
        price: false,
        date: false
   });

    const onSubmit = (e) => {
        e.preventDefault();

        if(!errors.name && !errors.price && !errors.date && !!subscription.name && !!subscription.price && !!subscription.date && !!subscription.id) {
            subscriptions.addNewSubscription(subscription.name, subscription.price, subscription.date, false)
        }
   }

    const onInput = (name, value) => {
        switch(name) {
            case 'price': {
                value = Number(value);
                if(Number.isNaN(value) || value <= 0) {
                    setErrors({...errors, price: true});
                } else {
                    setErrors({...errors, price: false});
                }
                setSubscription({...subscription, price: value})
                break;
            }
            case 'date': {
                value = Number(value);
                if(Number.isNaN(value) || value <= 0 || value > 31 || !Number.isInteger(value)) {
                    setErrors({...errors, date: true});
                } else {
                    setErrors({...errors, date: false});
                }
                setSubscription({...subscription, date: value})
                break;
            }
            case 'name': {
                if(value.length >= 15 || value === '') {
                    setErrors({...errors, name: true});
                } else {
                    setErrors({...errors, name: false});
                }
                setSubscription({...subscription, name: value, id: value})
                break;
            }
            default: {
                break;
            }
        }
   }

    return (
        <StyledBottomPanel>
            <StyledBottomPanelForm
                action="submit"
                display="flex"
                onSubmit={(e) => onSubmit(e)}
            >
                <StyledBottomPanelInput
                    value={subscription.name}
                    placeholder="Service"
                    onInput={(e) => onInput('name', e.target.value)}
                    error={errors.name}
                    bottomPanel
                />

                <StyledBottomPanelInput
                    value={subscription.price}
                    placeholder="Price"
                    onInput={(e) => onInput('price', e.target.value)}
                    error={errors.price}
                    bottomPanel
                />

                <StyledBottomPanelInput
                    value={subscription.date}
                    placeholder="Pay on the ...th"
                    onInput={(e) => onInput('date', e.target.value)}
                    error={errors.date}
                    bottomPanel
                />
                
                <Button
                    padding="0 20px"
                    width="25%"
                    type="submit"
                    primary
                >
                    Add
                </Button>
            </StyledBottomPanelForm>
        </StyledBottomPanel>
    )
}