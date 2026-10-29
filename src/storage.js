import { ProjectLibrary } from './projectLibrary.js';
import { Todo } from './todo.js';
import { Project } from './project.js';

export function save(projectLibrary) {
    const data = JSON.stringify(projectLibrary);
    localStorage.setItem('projectLibrary', data);
}   

export function load() {
    const data = localStorage.getItem('projectLibrary');
    if (data) {
        const parsedData = JSON.parse(data);
        const projectLibrary = new ProjectLibrary();
        projectLibrary.projects = parsedData.projects.map(projectData => {
            const project = new Project(projectData.name, projectData.description);
            project.id = projectData.id;
            project.todos = projectData.todos.map(todoData => {
                const todo = new Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
                todo.id = todoData.id;
                return todo;
            });
            return project;
        });
        return projectLibrary;
    }
    return new ProjectLibrary();
}