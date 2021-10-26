import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import "../css/TodoList.css";
import { Link } from "react-router-dom";

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {props.tasks.map((task, i) => (
        <Link to={`/details/${task.id}`} key={i}>
          <Todo
            done={task.done}
            title={task.title}
            deleteFn={(ev) => props.deleteFn(ev, task.title)}
            toggleFn={(ev) => props.toggleFn(ev, task.title)}
          />
        </Link>
      ))}
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteFn: PropTypes.func.isRequired,
  toggleFn: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  tasks: [],
};

export default TodoList;
