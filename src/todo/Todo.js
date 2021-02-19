//welp... i do understand but don't know at this time how to make
// the things happen that i want to happen.  It WAS at least adding the items.  Styled
//and everything.  I have a snapshot.  Don't know what I did or how to do it again. :-(
// stuck and cannot move forward until i get it back to how it was.

import { useContext, useState } from 'react' 
import { store } from './Provider'
import TodoList from './TodoList'

export default function Todo() {
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
        // const completed = {type: 'DELETE_TODO', payload: ''}
        // console.log(action)
        dispatch({type: 'INCREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        //onClick??? dispatch({type: 'DELETE_TODO', payload: ''})
        setText('')
    }
    return (
        <div>
            <h1>todos</h1>
            {text}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className="formInput" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <TodoList todos={todos}></TodoList>
            {count} items left
{/* <button onClick={() => dispatch({type: 'INCREMENT_BY_5', payload: 5 })}>CLICK</button>
<button onClick={() => dispatch({type: 'DELETE_TODO', payload: 1})}>CLICK DELETE</button> */}
        </div>
    )
}