import React, {useState} from 'react';

let ind = 0;

const ArrayState = (props) => {
    const [val, setVal] = useState('');
    const [itms, setItems] = useState([]);
    const handleClick = () =>{
        {setItems([...itms, {id: ind++, val: val}]);
        console.log(itms)}
        // to enter elements at the beginning of the array
        // {setItems([{id: ind++, val: val}, ...itms]);
    }

    const handleUpdate = (id) => {
        console.log('jol');
        setItems(prevItems => {
            return prevItems.map(itm => itm.id === id ? {...itm,val:parseInt(itm.val)+1} :itm);
        })
    }
    const handleRemove = (id) => {
        console.log(itms)
        setItems(prevItems => prevItems.filter(i=> i.id != id))
        console.log(itms)
    }
    return(
        <>
        <input type="text" value={val} onChange={e => setVal(e.target.value)} />
        <button onClick={() => handleClick()}>Add</button>

    {itms?.map(i => (
        <div key={i?.id}>
            <h5>{i?.val}</h5>
            <button onClick={() => handleRemove(i?.id)}>Remove</button>
            <button onClick={(()=> handleUpdate(i?.id))}>Increment</button>
        </div>
    )
    )}
        </>

    )
}

export default ArrayState;