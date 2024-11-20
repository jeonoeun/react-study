import React, { useRef, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState({});
  const [todoList, setTodoList] = useState([]);
  const num = useRef(1);
  const handlerInput = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
      id: num.current,
      done: false,
    });
  };

  const handlerList = () => {
    if (todo.title.length < 5) {
      alert("더 길게 입력해 주세요🤔");
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({
      title: "",
      content: "",
    });
    num.current++;
  };

  const handlerDelete = (id) => {
    setTodoList(todoList.filter((it) => id !== it.id));
  };

  const handlerModify = (id) => {
    console.log(id);
    setTodoList(
      todoList.map((it) =>
        id === it.id
          ? {
              ...it,
              done: !it.done,
            }
          : it
      )
    );
  };

  return (
    <div>
      <ul>
        {todoList.map((it, idx) => (
          <li key={it.id} className={it.done? '' : 'on'}>
            <input type="checkbox" onChange={() => handlerModify(it.id)} />
            {/* {it.id} */}
            {it.title} / {it.content}
            <button onClick={() => handlerDelete(it.id)}>삭제</button>
            {console.log(it.done)}
          </li>
        ))}
      </ul>
      <input onChange={handlerInput} name="title" value={todo.title || ""} />
      <input
        onChange={handlerInput}
        name="content"
        value={todo.content || ""}
      />
      <button onClick={handlerList}>ENTER</button>
      {console.log(todo)}
    </div>
  );
};

export default App;
