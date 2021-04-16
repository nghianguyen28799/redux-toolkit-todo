  
import React from 'react'
import { useSelector } from 'react-redux';

import { selectTodoList } from '../../features/Todo/todo.selector';
import TodoItem from './TodoItem';

const TodoList = function TodoList() {
    const todoList = useSelector(selectTodoList)
    console.log(todoList);
    return (
        <div style={{width: '100%'}}>
            {
                todoList.map(item => <TodoItem key={item.id} todo={item} /> )
            }
        </div>
    )
};

export default TodoList