import { createContext, useReducer } from 'react'

const initialState = {todos: [], count: 0, banana: false};
const store = createContext(initialState);
export const { Provider } = store;

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16

function ToDoReducer(){
    
}

const StateProvider = ( { children } ) => {
                                            // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer((state, action) => {
      console.log(state, action);
    switch(action.type) {
      case 'ADD_TODO':
          return {...state, todos: [...state.todos, action.payload]}
      case 'INCREMENT':
          return {...state, count: state.count + 1}
      default:
        throw new Error();
    };
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default StateProvider