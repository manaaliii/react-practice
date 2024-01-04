import React, { createContext} from 'react';   

export const CharacterContext = createContext([]);
export const CharacterDispatchContext =  createContext(()=>{});








// import React, {useState, createContext} from 'react';   

// const CharacterContext = createContext();

// const CharacterProvider = ({children}) => {
//     const [characters, setCharacters] = useState(['Saitama','Itachi', 'Garou', 'Hina', 'Emma', 'Mikey'])
//     const addCharacters = (input) => {
//         setCharacters((prevCharacters)=>[...prevCharacters, input])
//     }

//     const updateCharacters = (id,input) => { 
//         const newCharacters = characters.map((character,index)=>index===id ? input : character)
//         setCharacters(newCharacters)
//     }

//     const deleteCharacter = (id) =>{
//         console.log(id)
//         console.log(typeof id)
//         const newCharacters = characters.filter((character,index)=> index !== id )
//         setCharacters(newCharacters)
//     }

//     return(
//         <CharacterContext.Provider value = {{ characters, addCharacters, updateCharacters,deleteCharacter }} >
//         {children}
//         </CharacterContext.Provider>
//     )
// }


// export {CharacterContext}
// export default CharacterProvider;