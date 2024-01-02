import React,{useState, useEffect} from 'react';
let cnt = 0;

const Button = props => {
  

    const handleClick = () => {
        cnt+=1;
        console.log(cnt);
    }


    return(
        <>
        <button onClick = {handleClick}>button clicked {cnt} times</button>
        
        </>
    )
}

export default Button;