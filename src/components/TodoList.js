function TodoList(props) {
  const todos = props.todos;
  const handleCompleteTodo = props.handleCompleteTodo;

  return (
    <div>
      <h1>Todo List</h1>
      <div className='todo__list'>
        {todos.map(function (todo, index) {
          return (
            <span
              key={todo.id}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.title}
              <button
                onClick={() => {
                  handleCompleteTodo(todo.id);
                }}
              >
                complete
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* todos = ['new todo', 'todo 1', 'todo 2'] //past
[<span>new todo</span>, <span>todo 1</span>, <span>todo 2</span>] // new ara
 */
export default TodoList;
