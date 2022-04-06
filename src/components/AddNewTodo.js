import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    state = { todos: [{ task: 'Feed a cat' }, { task: 'Walk a dog' }] };
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />;
        });
        return (
            <div>
                <h1>TodoList</h1>
                <ul>{todos}</ul>
            </div>
        );
    }
}