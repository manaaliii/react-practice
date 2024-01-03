import React from 'react';

const Message = (props) => {
    return (
        <>
            <h1> I am the component Message</h1>
            <p>Message: {props?.msg}</p>
        </>
    );
}

export default Message;
