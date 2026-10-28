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
export const renderProjectDetails = (project, onDeleteProject, canDelete, onAddTodo) => {
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

        addTodoButton.addEventListener('click', () => {
            onAddTodo();
        });

        if (canDelete) {
            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.textContent = 'Delete Project';
            projectButtonsDiv.appendChild(deleteProjectButton);
            deleteProjectButton.classList.add('delete-project-button');

            deleteProjectButton.addEventListener('click', () => {
                onDeleteProject(project.id);
            });
        }
    }
};

// render list of todos
export const renderTodos = (todos, onDeleteTodo, onEditTodo) => {
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
        
        deleteButton.addEventListener('click', () => {
            onDeleteTodo(todo.id);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-todo-button');
        todoActionsDiv.appendChild(editButton);
        
        editButton.addEventListener('click', () => {
            onEditTodo(todo.id);
        });

        todoContainer.appendChild(todoDiv);
    }
};

// render dialog for adding project
export const renderAddProjectDialog = (onSubmit) => {
    const projectDialog = document.createElement('dialog');
    projectDialog.id = 'add-project-dialog';

    projectDialog.innerHTML = `
        <form id="add-project-form">
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

// render dialog for adding todo
export const renderAddTodoDialog = (onSubmit, editTodo) => {
    const todoDialog = document.createElement('dialog');
    todoDialog.id = 'add-todo-dialog';

    todoDialog.innerHTML = `
        <form id="add-todo-form">
            <label for="todo-title">Todo Title:</label>
            <input required type="text" id="todo-title" name="todo-title" placeholder="My Todo">
            <label for="todo-description">Todo Description:</label>
            <textarea required id="todo-description" name="todo-description" placeholder="My Todo Description"></textarea>
            <label for="todo-due-date">Due Date:</label>
            <input required type="date" id="todo-due-date" name="todo-due-date">
            <label for="todo-priority">Priority:</label>
            <select required id="todo-priority" name="todo-priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit" id="submit-add-todo">Add Todo</button>
            <button type="button" id="cancel-add-todo">Cancel</button>
        </form>
    `;
    document.body.appendChild(todoDialog);

    if (editTodo) {
        todoDialog.querySelector('#todo-title').value = editTodo.title;
        todoDialog.querySelector('#todo-description').value = editTodo.description;
        todoDialog.querySelector('#todo-due-date').value = editTodo.dueDate;
        todoDialog.querySelector('#todo-priority').value = editTodo.priority;
        todoDialog.querySelector('#submit-add-todo').textContent = 'Update Todo';
    }

    todoDialog.showModal();

    todoDialog.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(todoDialog.querySelector('form'));
        const todoTitle = formData.get('todo-title');
        const todoDescription = formData.get('todo-description');
        const todoDueDate = formData.get('todo-due-date');
        const todoPriority = formData.get('todo-priority');

        onSubmit(todoTitle, todoDescription, todoDueDate, todoPriority);

        todoDialog.close();
    });
    
    todoDialog.querySelector('#cancel-add-todo').addEventListener('click', () => {
        todoDialog.close();
    });

    todoDialog.addEventListener('close', () => {
        todoDialog.remove();
    });
};