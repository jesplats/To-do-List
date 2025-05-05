export const todoReducer=(initialState,action)=>{

switch (action.type) {  
case 'Add Todo':
    return [...initialState,action.payload]



    case 'Delete Todo':
return  initialState.filter(todo=>todo.id !== action.payload.id)

    case 'Complete Todo':


    case 'update Todo':

    default:
        return initialState;

   



}



}