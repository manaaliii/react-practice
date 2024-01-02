import React,{useState, useEffect, useMemo} from "react";

const MemoDemo = props => {
    const [number, setNumber] = useState(5);
    const [color, setColor] = useState('light');

    const obj = useMemo(()=>{
        return {name: 'Sarah', student: false ,age: 17}
    }, [])

    useEffect(()=>{
        console.log(' i m the obj ')
    }, [obj])

    return(
        <>
        <br/>
        <h3>UseMemo demo</h3>
   
        {number}
        <br></br>
        <button onClick={()=>{setColor(pre => pre = pre == 'dark' ? 'light' : 'dark' ); setNumber(number+1);console.log('i m clicked')}} >button</button>
        </>
    )
}

export default MemoDemo;