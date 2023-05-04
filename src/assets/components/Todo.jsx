import { useState } from "react";
import "./todo.css";
function Todo() {
  const [toDo, settodo] = useState("");
  const [toDos, settodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = toDos.find((i) => i.id === editId);

      const updatedTodos = toDos.map((x) =>
        x.id === editTodo.id
          ? (x = { id: x.id, toDo })
          : { id: x.id, todo: x.toDo }
      );
      settodos(updatedTodos);
      setEditId(0);
      settodo("");
      return;
    }

    if (toDo !== "") {
      settodos([{ id: `${toDo}-${Date.now()}`, toDo }, ...toDos]);
      settodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = toDos.filter((data) => id != data.id);
    settodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = toDos.find((i) => i.id === id);
    settodo(editTodo.toDo);
    setEditId(id);
  };

  return (
    <div className="container">
      <h1>To DO List App</h1>
      <form className="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => settodo(e.target.value)}
          value={toDo}
        />
        <button type="submit">{editId ? "Edit" : "Go"}</button>
      </form>
      <ul className="allTodos">
        {toDos.map((data) => (
          <li className="singleTodo" key={data.id}>
            <span className="allTodo">{data.toDo}</span>
            <button onClick={() => handleEdit(data.id)}>Edit</button>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
