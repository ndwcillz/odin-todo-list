import './styles.css';
import { ProjectLibrary } from './projectLibrary.js';
import { renderProjects, renderTodos, renderProjectDetails, renderAddProjectDialog, renderAddTodoDialog } from './dom.js';
import { save } from './storage.js';

const projectLibrary = new ProjectLibrary();

let selectedProject = projectLibrary.defaultProject;
const render = () => {
    renderProjects(projectLibrary.projects, (projectId) => {
        selectedProject = projectLibrary.getProject(projectId);
        render();
    });
    let canDelete = false;
    if (projectLibrary.projects.length > 1) {
        canDelete = true;
    }
    renderProjectDetails(selectedProject, (projectId) => {
        projectLibrary.removeProject(projectId);
        selectedProject = projectLibrary.projects[0]; // Select the first project after deletion
        render();
    }, canDelete, () => {
        renderAddTodoDialog((title, description, dueDate, priority) => {
            selectedProject.addTodo(title, description, dueDate, priority);
            render();
        });
    });
    renderTodos(selectedProject.todos, (todoId) => {
        selectedProject.removeTodo(todoId);
        render();
    }, (todoId) => {
        const todo = selectedProject.getTodo(todoId);
        renderAddTodoDialog((title, description, dueDate, priority) => {
            todo.update(title, description, dueDate, priority);
            render();
        }, todo);
    });
    save(projectLibrary);
};

render();

// add project and render it
const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
    renderAddProjectDialog((name, description) => {
        const newProject = projectLibrary.addProject(name, description);
        selectedProject = newProject;
        render();
    });
}); 