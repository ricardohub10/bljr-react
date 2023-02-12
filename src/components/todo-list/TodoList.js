import './TodoList.css'

const TodoList2 = () => {
return (
    <ul>
        <li>Learn React</li>
        <li>Build Tools</li>
        <li>Record</li>
    </ul>
    )
}

const TodoList  = (props) => {
    console.log(props.datatodos)
    return (
        <ul> 
          {
            props.datatodos.map((todo)=> {
                // {id: 1, title: 'eat'}
                return <li key={todo.id}>{todo.title}</li>
            })
          }
        </ul>
        )
    }

export default TodoList