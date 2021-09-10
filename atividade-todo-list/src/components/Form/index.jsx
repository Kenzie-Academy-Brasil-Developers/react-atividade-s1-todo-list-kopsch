import { useState } from "react";
import "./styles.css";

function Form({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="container">
        <div className="title-background">
          <h1 className="title">Lista de Afazeres</h1>
        </div>
        <form className="form" onSubmit={(evt) => evt.preventDefault()}>
          <label className="label">Insira um afazer para concluir</label>
          <input
            className="label__input"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
          />
          <button className="label__button" onClick={() => addTodo(value)}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
