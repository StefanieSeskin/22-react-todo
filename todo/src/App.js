
import './App.css';
import { createContext, useContext, useReducer, useState } from 'react'
import TodoApp from './TodoApp'

function App(){
  return (
    <div>
    <TodoApp></TodoApp>
  )
})

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
