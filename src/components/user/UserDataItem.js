import React from 'react';
import Div from '../customized/Div';
import Span from '../customized/Span';
import Img from '../customized/Img';


export default function UserDataItem({ name, icon, value, symbol }) {
    return (
        <Div
            display="flex"
            justifyContent="space-between"
            margin="0 0 20px 0"
        >
            <Div
                display="flex"
                alignItems="center"
                fontSize="14px"
                color="#3e3e3e"
                fontWeight="600"
            >
                <Img
                    src={icon}
                    margin="0 10px 0 0"
                    alt="0 10px 0 0"
                />
                <Span>{name}:</Span>
            </Div>
            <Span
                fontSize="16px"
                color="#235fbf"
                fontWeight="700"
            >
                {symbol ? `$${value}` : !symbol ? value : 'Error'}
            </Span>
        </Div>
    )
}