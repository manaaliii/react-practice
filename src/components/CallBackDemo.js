import React, {useState, useCallback, useEffect} from 'react';

const CallBackDemo = () => {
    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState('dark');
    const getItems = useCallback((val) => {
        console.log('getItems called')
        return [num + val, num + val + 1]
    }, [num])
    return(
        <>
        <button onClick={()=>{setNum(num+1)}}>  inc </button>
        <button onClick={()=>{setTheme(prevTheme=>prevTheme = prevTheme == 'dark'?'light':'dark')}}>  toggle Theme </button>
        <br/>
        {theme}
        <List itms = {getItems} />
        </>
    )
}


const List = ({itms}) => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        setItems(itms(5))
    }, [itms])
    return(
        <>
        <ul>       
          {items.map(it => <li key={it}>{it}</li>)}
        </ul>
        </>
    )
}

export default CallBackDemo;