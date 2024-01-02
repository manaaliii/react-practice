import React, {useState} from 'react';

let ind = 0;

const ArrayState = (props) => {
    const [val, setVal] = useState('');
    const [itms, setItems] = useState([])
    return(
        <>
        <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        <button onClick={() => {setItems([...itms, {id: ind++, val: val}]);console.log(typeof itms)}}>Add</button>

    {itms.map(i => <li>{i.id}+1 : {i.val}</li>)}
        </>

    )
}

export default ArrayState;