import React from 'react';
import Span from '../customized/Span';
import Img from '../customized/Img';

export default function UserInfo({ numberOfSubscriptions, userIcon }) {
    return (
        <>
            <Img
                border="3px solid #235fbf"
                borderRadius="50%"
                height="60px"
                width="60px"
                display="flex"
                justifyContent="center"
                overflow="hidden"
                margin="0 10px 0 0"
                src={userIcon}
            />
            <div>
                <Span
                    fontSize="18px"
                    fontWeight="700"
                    color="#3e3e3e"
                    display="block"
                >
                    John Smith
                </Span>
                <Span
                    fontSize="14px"
                    fontWeight="600"
                    color="#235fbf"
                    display="block"
                >
                    {`${numberOfSubscriptions} subscriptions` }
                </Span>
            </div>
        </>
    )
}