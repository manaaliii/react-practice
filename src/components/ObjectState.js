import { toBeRequired } from '@testing-library/jest-dom/matchers';
import React, {useState} from 'react';
import { useImmer } from "use-immer";

const ObjectState = (props) =>{
    const [obj, setObj] = useState({name: 'Sarah', student: false ,age: 17})

    const [obj2, setObj2] = useImmer({
        name: 'Sarah', student: false ,age: 17, 
        address: {
            city: 'Pune',
            state: 'Maharashtra'
        }})



    const handleToggle = ()=>{
        setObj(prevObj => {return {...prevObj, student: prevObj.student ? false : true}})
    }

    const handleClick = ()=>{
        let val = obj2.address.city;
        let upVal = val == 'Pune' ? 'Ahmedabad' : 'Pune';
        
        setObj2(draft => {draft.address.city= upVal;
            draft.student= draft.student ? false : true})
        // setObj2(draft => {draft.student= draft.student ? false : true})
        
    }
    
    return(
        <>
            <h5>{JSON.stringify(obj)}</h5>
            <button onClick={handleToggle}>click to toggle student!</button>
            <h4>Nested object update</h4>
            <h5>{JSON.stringify(obj2)}</h5>
            <button onClick={handleClick}>click to update</button>
        </>
    )
}

export default ObjectState;