import React, { useReducer, useState } from 'react';
import HobbyReducer, {Actions} from '../reducers/HobbyReducer';
import Hobby from './Hobby';

const ReducerDemo =() => {
    const initialState = [
        'Music', 'Sports', 'Writing'
    ]
    const [inputHobby, setInputHobby] = useState('')
  const [hobby, dispatch] = useReducer(HobbyReducer, initialState)

  const handleAddTask = () =>{
    dispatch(
        {
            type: Actions.ADD,
            payload: {value: inputHobby}
        }
    )
  }

  const handleUpdateTask = (index, value) =>{
    dispatch(
        {
            type: Actions.UPDATE,
            payload: {id: index, value: value}
        }
    )
  }

  const handleDeleteTask = (event, index) =>{
    dispatch({
        type: Actions.DELETE,
        payload: {index: index}
    })
  }

  return (
    <div>
        <input type="text" onChange={(event)=>setInputHobby(event.target.value)} placeholder="Enter your hobby" />
        <button type="submit" onClick={()=> handleAddTask()}>Add Hobby</button>
        <ul>
            {hobby?.map((value, index) => {
                return (
                   
                     <Hobby index={index} value={value} handleUpdate = {handleUpdateTask} handleDelete={handleDeleteTask} />
                   
                )
            })}
        </ul>

    </div>
  )
}

export default ReducerDemo