import React from 'react';
import { useState, useEffect } from 'react';

const WindowSize = (props) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const handleChangeSize = () => {
        setWindowSize(window.innerWidth);
    }
    // useEffect(() => {
        // window.addEventListener('resize', handleChangeSize);
        // console.log('moye moye')
 
        // this code will run first after 2nd time useeffect called 
        // return () => {
            // window.removeEventListener('resize', handleChangeSize);
            // console.log('returns  moye moye')
        // }
    // },[])
    return(
        <h1 onChange={handleChangeSize}>{windowSize}</h1>
    )
}

export default WindowSize;