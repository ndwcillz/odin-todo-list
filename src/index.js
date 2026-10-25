import './styles.css';
import { ProjectLibrary } from './projectLibrary.js';
import { renderProjects, renderTodos, renderProjectDetails, renderAddProjectDialog } from './dom.js';


// Initial rendering of the default project and one default todo
const projectLibrary = new ProjectLibrary();

let selectedProject = projectLibrary.defaultProject;
const render = (project) => {
    renderProjects(projectLibrary.projects, (projectId) => {
        selectedProject = projectLibrary.getProject(projectId);
        render(selectedProject);
    });
    renderProjectDetails(project);
    renderTodos(project.todos);
};

render(selectedProject);

// add project and render it
const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', () => {
    renderAddProjectDialog((name, description) => {
        const newProject = projectLibrary.addProject(name, description);
        selectedProject = newProject;
        render(selectedProject);
    });
}); 




/* ---test code 

const defaultProject = projectLibrary.addProject("Default Project", "This is the default project.");



console.log(projectLibrary);
projectLibrary.projects[0].addTodo("Sample Title", "Sample Description", "2024-06-01", "1", "Sample Notes");
console.log(projectLibrary.projects[0]);


const projectOne = projectLibrary.addProject("Sample Project", "Sample Project Description");
const sampleTodo = projectOne.addTodo("Sample Title", "Sample Description", "2024-06-01", "1", "Sample Notes");
const sampleTodoTwo = projectOne.addTodo("Sample Title 2", "Sample Description 2", "2024-06-02", "2", "Sample Notes 2");
const todo2id = sampleTodoTwo.id;
const sampleTodoThree = projectOne.addTodo("Sample Title 3", "Sample Description 3", "2024-06-03", "3", "Sample Notes 3");
sampleTodoThree.toggleComplete();
projectOne.removeTodo(todo2id);
console.log(sampleTodo);
console.log(sampleTodoTwo);
console.log(sampleTodoThree);
console.log(projectOne);
*/