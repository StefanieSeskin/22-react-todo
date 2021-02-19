
//welp... i do understand but don't know at this time how to make
// the things happen that i want to happen.  It WAS at least adding the items.  Styled
//and everything.  I have a snapshot.  Don't know what I did or how to do it again. :-(
// stuck and cannot move forward until i get it back to how it was.

import './App.css';
import { createContext, useContext, useReducer, useState } from 'react'
import TodoApp from './todo/TodoApp'

export default function App(){
  return (

    <TodoApp><h1>todos</h1></TodoApp>
  )
}

// const StateProvider = ( { children } ) => {
//                                             // {type: 'ADD_TODO', payload: 'hello'}
//   const [state, dispatch] = useReducer((state, action) => {
//       console.log(state, action);
//     switch(action.type) {
//       case 'ADD_TODO':
//           return {...state, todos: [...state.todos, action.payload]}
//       case 'INCREMENT':
//           return {...state, count: state.count + 1}
//       default:
//         throw new Error();
//     };
//   }, initialState);
//   return <Provider value={{ state, dispatch }}>{children}</Provider>
// }

// function Child() {
//     const globalState = useContext(store)
//     const [text, setText] = useState('')
//     // console.log(globalState)
//     console.log(globalState.state)
//     const todos = globalState.state.todos
//     const count = globalState.state.count
//     const { dispatch } = globalState;
//     function handleSubmit(e) {
//         e.preventDefault()
//         const action = {type: 'ADD_TODO', payload: text}
//         // console.log(action)
//         dispatch({type: 'INCREMENT'})
//         dispatch({type: 'ADD_TODO', payload: text})
//         setText('')
//     }
//     return (
//         <div>
//             {count}
//             {text}
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//             </form>
//             <ul>
//                 {todos.map(todo => <p>{todo}</p>)}
//             </ul>
//         </div>
//     )
// }

// export default function ContextState() {
//     return <StateProvider>
//         <Child />
//     </StateProvider>