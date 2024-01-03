const Actions = {
    ADD : 'Add',
    UPDATE : 'Update',
    DELETE : 'Delete',
}

const HobbyReducer = (state, action) => {
    switch(action.type) {
        case Actions.ADD :
            return [...state, action.payload.value]
        case Actions.UPDATE:{
            // const ind = state.findIndex(((value, index)=>index == action.payload.id))
            let index = action.payload.id
            let value = action.payload.value
            let newState = [...state.slice(0, index), value, ...state.slice(index +1)]
            console.log(newState)
            return newState;
        }
        case Actions.DELETE:{
            // console.log(...state.slice(0, action.payload.index))
            console.log( ...state.slice(action.payload.index+1))
            return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index+1)]
        }
    }

}

export default HobbyReducer
export {Actions};