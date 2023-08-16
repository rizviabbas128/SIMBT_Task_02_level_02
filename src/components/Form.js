const Form = ({setInputText, todos , setTodos , inputText}) => {
    // javascript code and function
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos , {text: inputText , completed: false , id: Math.random() * 1000}])
        setInputText("");
    }
    return (
        <form>
            <div>
            <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
            </div>
            <div>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Add
            </button>
            </div>

        </form>
    )
}

export default Form;