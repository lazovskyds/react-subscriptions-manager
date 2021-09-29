import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../customized/Form';
import Input from '../customized/Input';
import Button from '../customized/Button';

const StyledBottomPanel = styled.div`
    display: flex;
    align-content: flex-end;
    background-color: #fff;
    padding: 10px 20px;
    border-top: 2px solid #a7bfe5;
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
            postSubscription(subscription);
        }
    }

    const onInput = (name, value) => {
        if(name === 'price') {
            value = Number(value);
            if (Number.isNaN(value) || value <= 0) {
                setErrors({...errors, price: true});
            } else {
                setErrors({...errors, price: false});
            }
            setSubscription({...subscription, price: value})
        }

        if(name === 'date') {
            value = Number(value);
            if (Number.isNaN(value) || value <= 0 || value > 31 || !Number.isInteger(value)) {
                setErrors({...errors, date: true});
            } else {
                setErrors({...errors, date: false});
            }
            setSubscription({...subscription, date: value})
        }

        if(name === 'name') {
            if (value.length >= 15 || value === '') {
                setErrors({...errors, name: true});
            } else {
                setErrors({...errors, name: false});
            }
            setSubscription({...subscription, name: value, id: value})
        }
    }

    return (
        <StyledBottomPanel>
            <Form
                action="submit"
                display="flex"
                onSubmit={(e) => onSubmit(e)}
            >

                <Input
                    border={errors.name ? '2px solid red' : '2px solid #bcbcbc'}
                    outlined
                    placeholder="Service"
                    width="25%"
                    margin="0 20px 0 0"
                    onInput={(e) => onInput('name', e.target.value)}
                />

                <Input
                    border={errors.price ? '2px solid red' : '2px solid #bcbcbc'}
                    outlined
                    placeholder="Price"
                    width="25%"
                    margin="0 20px 0 0"
                    onInput={(e) => onInput('price', e.target.value)}
                />

                <Input
                    border={errors.date ? '2px solid red' : '2px solid #bcbcbc'}
                    outlined
                    placeholder="Pay on the ...th"
                    width="25%"
                    margin="0 20px 0 0"
                    onInput={(e) => onInput('date', e.target.value)}
                />
                
                <Button
                    primary
                    padding="0 20px"
                    width="25%"
                    type="submit"
                >
                    Add
                </Button>

            </Form>
        </StyledBottomPanel>
    )
}