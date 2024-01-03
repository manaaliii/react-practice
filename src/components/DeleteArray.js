import React, { useState } from "react";

let id = 4;
const DeleteArray = (props) =>{
    const [ar, setAr] = useState([{id: 1, name: 'sarah' }, {id: 2, name: 'giorno'}, {id: 3, name: 'narancia'}]);
    const [name, setName] = useState('');
    const handleClickTail=(e)=>{
        e.preventDefault();
        setAr([...ar, {id: id++, name: name}])
        console.log(ar);
    
    }

    const handleClickHead=(e)=>{
        e.preventDefault();
        setAr([{id: id++, name: name}, ...ar])
    
    }   


    const handleRemoveHead=(e)=>{
        e.preventDefault();
        let len = ar.length;
        setAr(len > 0 ? (len > 1 ? ar.slice(1) : []) : [])
    
    }
    const handleRemoveTail=(e)=>{
        let len = ar.length;
        e.preventDefault();
        setAr(len > 0 ? ar.slice(0, ar.length-1) : [])
    
    }
    return(
        <>
         <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter name" />
         <button type="submit" onClick={(e)=>handleClickHead(e)}>Add obj at head</button>
         <button type="submit" onClick={(e)=>handleClickTail(e)}>Add obj at tail</button>
         <button type="submit" onClick={(e)=>handleRemoveHead(e)}>Remove obj at head</button>
         <button type="submit" onClick={(e)=>handleRemoveTail(e)}>Remove obj at tail</button>

         <h2>List of users</h2>
         <ul>
            {ar.length > 0 ? ar.map(ele=>{
                return(
                    <li key={ele.id}>{ele.name}</li>
                )
            }) : <li>no list to display</li>}
         </ul>
        </>
    )
}


export default DeleteArray;