import React from 'react';

const Eval = (props) => {

    // console.log("Condition");
    return (
        <>
            {props.eval ? (
                <h3>True value of boolean</h3>
            ) :
            (
                    <h3>False value of boolean</h3>
            )}
            {props.children}
        </>
    );
}

const Eval2 = (props) => {
    return (
        <>
            {props.val && <h3>{props.val}</h3>}
        </>
    );
}

export default Eval;
export { Eval2};