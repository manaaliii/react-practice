import React,{useState, useEffect} from 'react';


const Button = props => {
  

    const handleClick2 = (event, num) => {
        console.log(num)
    }


    return(
        <>
        <button style={props.btnstyle} onClick={props.onclick}>{props.btn_name}</button>
       {/*  with function as event handler */}
        <button onClick={()=>console.log("i m clicked.")}>Another Button</button>
        {/* function as event handler with paramters */}
        <button onClick={(event)=>{console.log("i m clicked."); handleClick2(event, 5)}}>Another Button</button>
        </>
    )
}

export default Button;