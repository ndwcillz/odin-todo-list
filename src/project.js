import { Todo } from './todo.js';

export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.todos = [];
    }

    addTodo(title, description, dueDate, priority, notes) {
        const todo = new Todo(title, description, dueDate, priority, notes);
        this.todos.push(todo);
        return todo;
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
}