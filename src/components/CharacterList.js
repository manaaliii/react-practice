import React, { useContext, useState } from 'react';
import { CharacterContext, CharacterDispatchContext } from '../context/contextCharacters';
import Character from './Character';
import Actions from '../Actions'

const CharacterList = () => {
  const [input, setInput] = useState('');
  const characters = useContext(CharacterContext);
  const dispatch = useContext(CharacterDispatchContext);
  console.log(characters)
  const handleClick = () => { 
    if(input === undefined || input === ''){
      alert('Please enter a character!');
      return false;
   }
    dispatch({
      type: Actions.ADD,
      payload:{
        value: input
      }
    })
    setInput('');
  }

  return (
    <div>
      <h1>Characters</h1>
      <input type="text" value={input} placeholder="Add Character" onChange={(event)=>setInput(event.target.value)}/>
      <button onClick={() => { handleClick() }}>add</button>
      <ul>
      {characters?.map((character, index) => {
        return (
          <Character key={index} id={index} character={character} />
        )

      })}
      </ul>
    </div>
  )
}

export default CharacterList;















// import React, { useContext, useState } from 'react';
// import { CharacterContext } from '../context/contextCharacters';
// import Character from './Character';

// const CharatcterList = () => {
//   const [input, setInput] = useState('');
//   const { characters, addCharacters } = useContext(CharacterContext);
//   // console.log(characters)
//   const handleClick = () => {
//     addCharacters(input);
//     setInput('');
//   }

//   return (
//     <div>
//       <h1>Charatcters</h1>
//       <input type="text" value={input} placeholder="Add Character" onChange={(event)=>setInput(event.target.value)}/>
//       <button onClick={() => { handleClick() }}>add</button>
//       <ul>
//       {characters?.map((character, index) => {
//         return (
//           <Character key={index} id={index} character={character} />
//         )

//       })}
//       </ul>
//     </div>
//   )
// }

// export default CharatcterList;