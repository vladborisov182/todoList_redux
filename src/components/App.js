import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodosBlock from '../components/TodoList';

const App = () => (
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4 jumbotron text-center">
                <AddTodo />
                <TodosBlock />
            </div>
        </div>
    </div>
);

export default App;