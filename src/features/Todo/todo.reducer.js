import {
    addTodo,
    deleteTodo,
    filterTodo,
    checkTodo
} from './todo.action';

export const FILTER_ENUMS = {
    ALL: 'ALL',
    DONE: true,
    UNDONE: false
}

const todoReducer = {
    [addTodo]: (state, action) => {
        state.todoList.push(action.payload)
    },
    [checkTodo]: (state, action) => {
        state.todoList.map(item => {
            if(action.payload === item.id) {
                item.done = !item.done
            }
            return item;
        })
    },
    [filterTodo]: (state, action) => {
        return {
            ...state,
            filter: action.payload
        }
    },

    [deleteTodo]: (state, action) => {
        console.log(action.payload);
        return{
            ...state,
            todoList: state.todoList.filter(item => item.id !== action.payload)
        }
    }
}

export default todoReducer;