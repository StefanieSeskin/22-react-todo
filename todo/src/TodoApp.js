import { useContext, useState } from 'react'
import StateProvider from 
const initialState = {todos: [], count: 0, banana: false};
const store = createContext(initialState);
const { Provider } = store;

import StateProvider, { store } from './Provider'

// arr.reduce
// [1,2,3].reduce((a, b) => a + b, 10) // 16


function Child() {
    const globalState = useContext(store)
    const [text, setText] = useState('')
    // console.log(globalState)
    console.log(globalState.state)
    const todos = globalState.state.todos
    const count = globalState.state.count
    const { dispatch } = globalState;
    function handleSubmit(e) {
        e.preventDefault()
        const action = {type: 'ADD_TODO', payload: text}
        // console.log(action)
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        setText('')
    }
    return (
        <div>
            {count}
            {text}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <ul>
                {todos.map(todo => <li>{todo}</li>)}
            </ul>
        </div>
    )
}

export default function ContextState() {
    return <StateProvider>
        <Child />
    </StateProvider>