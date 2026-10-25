// render list of projects
export const renderProjects = (projects, onProjectSelect) => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    for (const project of projects) {
        const projectButton = document.createElement('button');
        projectButton.textContent = project.name;
        projectList.appendChild(projectButton);
        projectButton.classList.add('project-button');
        
        projectButton.addEventListener('click', () => {
            onProjectSelect(project.id);
        });
    }
};

// render project details and add todo/delete project button
export const renderProjectDetails = (project) => {
    const projectDetails = document.getElementById('project-details');
    projectDetails.innerHTML = '';
    if (project) {
        const projectDetailsDiv = document.createElement('div');
        projectDetails.appendChild(projectDetailsDiv);
        projectDetailsDiv.classList.add('project-details-div');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;
        projectTitle.classList.add('project-title');

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDescription.classList.add('project-description');

        projectDetailsDiv.appendChild(projectTitle);
        projectDetailsDiv.appendChild(projectDescription);

        const projectButtonsDiv = document.createElement('div');
        projectButtonsDiv.classList.add('project-buttons-div');
        projectDetailsDiv.appendChild(projectButtonsDiv);

        const addTodoButton = document.createElement('button');
        addTodoButton.textContent = 'Add Todo';
        projectButtonsDiv.appendChild(addTodoButton);
        addTodoButton.classList.add('add-todo-button');

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.textContent = 'Delete Project';
        projectButtonsDiv.appendChild(deleteProjectButton);
        deleteProjectButton.classList.add('delete-project-button');
    }
};

// render list of todos
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
        deleteButton.classList.add('delete-todo-button');
        todoActionsDiv.appendChild(deleteButton);
        

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-todo-button');
        todoActionsDiv.appendChild(editButton);
        

        todoContainer.appendChild(todoDiv);
    }
};

// render dialog for adding project
export const renderAddProjectDialog = (onSubmit) => {
    const projectDialog = document.createElement('dialog');
    projectDialog.id = 'add-project-dialog';

    projectDialog.innerHTML = `
        <form>
            <label for="project-name">Project Name:</label>
            <input required type="text" id="project-name" name="project-name" placeholder="My Project">
            <label for="project-description">Project Description:</label>
            <textarea required id="project-description" name="project-description" placeholder="My Project Description"></textarea>
            <button type="submit" id="submit-add-project">Add Project</button>
            <button type="button" id="cancel-add-project">Cancel</button>
        </form>
    `;
    document.body.appendChild(projectDialog);

    projectDialog.showModal();


    projectDialog.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(projectDialog.querySelector('form'));
        const projectName = formData.get('project-name');
        const projectDescription = formData.get('project-description');

        onSubmit(projectName, projectDescription);

        projectDialog.close();
    });
    
    projectDialog.querySelector('#cancel-add-project').addEventListener('click', () => {
        projectDialog.close();
    });

    projectDialog.addEventListener('close', () => {
        projectDialog.remove();
    });
};
