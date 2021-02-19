//welp... i do understand but don't know at this time how to make
// the things happen that i want to happen.  It WAS at least adding the items.  Styled
//and everything.  I have a snapshot.  Don't know what I did or how to do it again. :-(
// stuck and cannot move forward until i get it back to how it was.

import { createContext, useReducer } from 'react'

// const initialState = {todos: [], count: 0, pickle: false};
const initialState = [{id: 1, description: 'hello'}, {id: 2, description: 'bye'}]
export const store = createContext(initialState);
const { Provider } = store;
const id = () => Math.random().toString() + '-' + Math.random().toString()
// const objectsnot2 = objects.filter(item  => item.id !==2)

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16

function todoReducer(state, action) {
    // console.log(state, action);
    switch(action.type) {
      case 'ADD_TODO':
          return {...state, todos: [...state.todos, { id: id(), description: action.payload}]}
      case 'INCREMENT':
          return {...state, count: state.count + 1}
    //  case 'INCREMENT_BY_5':
    //         return {...state, count: state.count + action.payload}
    // case 'DELETE_TODO': 
    //         return {...state, { id: 1, description: action.payload}
    //   case 'DELETE':
    //         return {...state}
      default:  
        throw new Error();

    };
}

const StateProvider = ( { children } ) => {
                                            // {type: 'ADD_TODO', payload: 'hello'}
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default StateProvider