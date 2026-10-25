export const renderProjects = (projects) => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    for (const project of projects) {
        const li = document.createElement('li');
        li.textContent = project.name;
        projectList.appendChild(li);
    }
};

export const renderProjectDetails = (project) => {
    const projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = '';
    if (project) {
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
    }
};

export const renderTodos = (todos) => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = todo.title;
        todoContainer.appendChild(todoDiv);
    }
};