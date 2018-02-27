import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { connect } from 'react-redux'
import { delTodo } from '../actions'
 
const TodoList = ({ todos, onTodoClick }) => (
  <ul className="list-group mt-3">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

const getTodos = (todos) => {
  return todos
}
 
const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(delTodo(id))
    }
  }
}
 
const TodosBlock = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
 
export default TodosBlock;