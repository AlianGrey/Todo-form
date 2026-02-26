import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    tasks = [],
  } = props

  const hasTasks = true;
    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }
    return (
      <ul className="todo__list">
{/* Full variant
        {tasks.map(({task}) => (
          <TodoItem
            className="todo__item"
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        ))} */}
{/* restructed variant */}
{/*         {tasks.map(({id,title,isDone}) => (
          <TodoItem
            className="todo__item"
            id={id}
            title={title}
            isDone={isDone}
          />
        ))} */}
        {/* Most short variant */}
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            {...task}
          />
        ))}
      </ul> 
    )
}

export default TodoList