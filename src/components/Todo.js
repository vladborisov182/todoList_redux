import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, onClick }) => (
    <li className="list-group-item list-group-item-action mb-1"
        onClick={onClick}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;