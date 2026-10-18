const Todo = ({
  todo,
  deleteTodo,
  completeTodo
}) => {
  const onClickDelete = () => {
    deleteTodo(todo)
  }

  const onClickComplete = () => {
    completeTodo(todo)
  }

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '70%',
        margin: 'auto',
      }}
    >
      <span>{todo.text}</span>
      {todo.done ? (
        <>
          <span>This todo is done</span>
          <span>
            <button onClick={onClickDelete}>Delete</button>
          </span>
        </>) : (
          <>
            <span>{todo.text}</span>
            <span>
              <button onClick={onClickComplete}>Done</button>
              <button onClick={onClickDelete}>Delete</button>
            </span>
          </>
          
        )}
    </div>
  )
}

export default Todo