import React, { useContext, useState, useEffect } from 'react';
import { CharacterContext, CharacterDispatchContext } from '../context/contextCharacters';
import Actions from '../Actions'


const Character = ({id, character}) =>{
    const characters = useContext(CharacterContext);
    const [input, setInput] = useState(character);
    useEffect(()=>{
        setInput(character)
    }, [characters])
    
    const dispatch = useContext(CharacterDispatchContext);
    const [visibility, setVisibility ] = useState(false); 
    const handleDelete = (id) =>{
        if(visibility === true){
            setVisibility(false);
        }
        dispatch({
            type: Actions.DELETE,
            payload: {
                id: id
            }
        })
    }

    const handleUpdate = (id) =>{
        if(input === undefined || input === ''){
            alert('Please enter a character!');
            return false;
        }
        setVisibility(false);
        dispatch({
            type: Actions.UPDATE,
            payload: {
                id: id,
                value: input
            }
        })
        setInput('');

    }

    return(
        <li> 
        
         {/* {!visibility && <h4 style={{fontWeight:400}}>{character}</h4>} */}

         {visibility ? 
         <>
         <input type="text" value={input} onChange={(event)=>setInput(event.target.value)}/>
         <button type="submit" onClick = {()=>handleUpdate(id)}>Save</button>
         </> : character
         }   
         {!visibility && <button type="submit" onClick={()=>setVisibility(true)}>Update</button>}
         <button type="submit" onClick={()=>{handleDelete(id)}}>Delete</button>
        </li>
    )
}

export default Character;