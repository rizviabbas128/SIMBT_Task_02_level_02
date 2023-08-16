const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        })
        );
    };
    return (
        <div className="todo">
            <div className="todo-text">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            </div>
            <div className="todo-btn">
                <div>
                <button onClick={completeHandler} className="edit"><i className="fas fa-pen">Edit</i></button>
                </div>
                <div>
                <button onClick={deleteHandler} className="trash"><i className="fas fa-trash">Delete</i></button>
                </div>
            </div>
        </div>
    )
}

export default Todo;