const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text
                }
            ]
        case 'DELETE_TODO' :
            return state.filter( (todo, id) => todo.id !== action.id);
    default:
        return state
    }
}

export default todos;