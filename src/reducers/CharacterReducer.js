import Actions from '../Actions'

const CharacterReducer = (characters, action) =>{
    switch(action.type){
        case Actions.ADD : {
            return [...characters, action.payload.value]
        }
        case Actions.UPDATE : {
            let index = action.payload.id;
            let value = action.payload.value;
            return characters.map((character, id) => id === index ? value : character)
        }
        case Actions.DELETE : {
            let index = action.payload.id;
            return characters.filter((character, id) => id !== index)

        }
    }
}

export default CharacterReducer;
