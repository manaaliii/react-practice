import React, {useReducer} from 'react';
import CharatcterList from './components/CharatcterList';
import CharacterReducer from './reducers/CharacterReducer';
import { CharacterContext, CharacterDispatchContext } from './context/contextCharacters';

const App = () => {
  const initialCharacters = ['Saitama','Itachi', 'Garou', 'Hina', 'Emma', 'Mikey'];
  const [characters, dispatch] = useReducer(CharacterReducer, initialCharacters);
  return(
    <>
     <CharacterContext.Provider value={characters}>
      <CharacterDispatchContext.Provider value={dispatch}>
        <CharatcterList />
      </CharacterDispatchContext.Provider>
      </ CharacterContext.Provider>

    </>
  )
}
export default App;

// import CharacterProvider from './context/contextCharacters';
// const App = () => {
//   return(
//     <>
//      <CharacterProvider>
     
//      <CharatcterList />
          
//      </CharacterProvider>
//     </>
//   )
// }

// export default App;


// import ReducerDemo from './components/ReducerDemo';
// const App = () => {
//   return(
//     <div>
//       <ReducerDemo />
//     </div>
//   )
// }

// export default App;

// import CallBackDemo from './components/CallBackDemo.js'
// import DeleteArray from './components/DeleteArray.js'
// const App = () => {
//   return (
//     <div>
//       <CallBackDemo />
//       <DeleteArray />
//     </div>
//   )
// }

// export default App;


// import ArrayState from './components/ArrayState.js';
// import ObjectState from './components/ObjectState.js';
// import MemoDemo from './components/MemoDemo.js';

// const App = () => {
//   return(
//     <div>
//       <ArrayState />
//       <ObjectState />
//       <MemoDemo />
//     </div>
//   )
// }

// export default App;



// import Message from './components/Message.js';
// import Eval from './components/Condition.js';
// import {Eval2} from './components/Condition.js';
// import ListRender from './components/ListRender.js';
// import WindowSize from './components/WindowSize.js';
// import Button from './components/Button.js';
// import CustomButton from './components/CustomButton.js';
// import React,{useState, useEffect} from 'react';
// import State_ from './components/UseStateDemo.js';

// export default function App() {
//   const [toggle, setToggle] = useState(true);
//   let [btnStyle, setBtnStyle] = useState({color: 'black', backgroundColor: 'white'});
// let btnStyle = {color: 'black', backgroundColor: 'white'}

//   const handleClick = (event) => {
//     setToggle(prevToggle => prevToggle ? false : true);
//     setBtnStyle(prevBtnStyle => {
//       return (
//       btnStyle =    toggle ? {color: 'white', backgroundColor: 'black'} : {color: 'black', backgroundColor: 'white'}
//       )
//     })
//     console.log(toggle)
//     console.log(btnStyle)
//     event.stopPropagation();
//   }
//   return(
//       <div onClick={()=>console.log('i m div')}>
//         <div onClick={(event)=>{console.log('i m div but direct parent')}}>

//           <Button btnstyle={btnStyle} onclick={handleClick} btn_name="Click" />
//         </div>
//         <CustomButton />
//         <WindowSize />
//         <Eval eval={true}>
//           <ListRender list={[1, 5, 8]}/>
//         </Eval>
//         <State_ />
//       </div>
//   )
// }