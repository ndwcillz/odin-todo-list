export const renderProjects = (projects) => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    for (const project of projects) {
        const projectButton = document.createElement('button');
        projectButton.textContent = project.name;
        projectList.appendChild(projectButton);
        projectButton.classList.add('project-button');
    }
};

export const renderProjectDetails = (project) => {
    const projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = '';
    if (project) {
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;
        projectTitle.classList.add('project-title');

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDescription.classList.add('project-description');
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
    }
};

export const renderTodos = (todos) => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');

        const todoInfoDiv = document.createElement('div');
        todoInfoDiv.classList.add('todo-info');
        todoDiv.appendChild(todoInfoDiv);

        const todoTitle = document.createElement('h4');
        todoTitle.textContent = todo.title;
        todoInfoDiv.appendChild(todoTitle);

        const todoDescription = document.createElement('p');
        todoDescription.textContent = todo.description;
        todoInfoDiv.appendChild(todoDescription);

        const todoDueDate = document.createElement('p');
        todoDueDate.textContent = `Due Date: ${todo.dueDate}`;
        todoInfoDiv.appendChild(todoDueDate);

        const todoPriority = document.createElement('p');
        todoPriority.textContent = `Priority: ${todo.priority}`;
        todoInfoDiv.appendChild(todoPriority);

        const todoActionsDiv = document.createElement('div');
        todoActionsDiv.classList.add('todo-actions');
        todoDiv.appendChild(todoActionsDiv);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        todoActionsDiv.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        todoActionsDiv.appendChild(editButton);

        todoContainer.appendChild(todoDiv);
    }
};