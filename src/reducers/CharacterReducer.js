import Actions from '../Actions'

const CharacterReducer = (characters, action) =>{
    switch(action.type){
        case Actions.ADD : {
            return [...characters, action.payload.value]
        };
        case Actions.UPDATE : {
            let index = action.payload.id;
            let value = action.payload.value;
            let newCharacters = characters.map((character, id)=> id === index ?value:character)
            return newCharacters
        };
        case Actions.DELETE : {
            let index = action.payload.id;
            let newCharacters = characters.filter((character, id)=> id !== index )
            return newCharacters

        }
    }
}

export default CharacterReducer;
