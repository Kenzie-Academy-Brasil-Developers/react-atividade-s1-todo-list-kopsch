import "./styles.css";

function TodoList({ list, handleTodo }) {
  return (
    <ul className="list">
      {list.map((elm, index) => {
        return (
          <li className="list__item" key={index}>
            <p className="list__item__paragraph">{elm}</p>
            <button
              className="list__item__button"
              onClick={() => handleTodo(elm)}
            >
              Concluído!
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
