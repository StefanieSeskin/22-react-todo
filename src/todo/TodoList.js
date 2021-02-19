//welp... i do understand but don't know at this time how to make
// the things happen that i want to happen.  It WAS at least adding the items.  Styled
//and everything.  I have a snapshot.  Don't know what I did or how to do it again. :-(
// stuck and cannot move forward until i get it back to how it was.  BUMMED. And
//of course i never pushed to github.

export default function TodoList(props) {
    // console.log(props)
    return (
        <ul>
            {props.todos.map(todo => {
                return <li className="listItems">{todo.description}
{/* onClick={() => dispatch({ type: "DELETE", payload: "" })???????} */}
                </li>
            })}
        </ul>
    )
}

