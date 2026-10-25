import { Project } from './project.js';

export class ProjectLibrary {
    constructor() {
        this.projects = [];
        this.defaultProject = new Project('Default Project', 'This is the default project.');
        this.projects.push(this.defaultProject);
    }

    addProject(name, description) {
        const project = new Project(name, description);
        this.projects.push(project);
        return project;
    }

    removeProject(projectId) {
        if (projectId === this.defaultProject.id) {
            return; // Prevent removing the default project
        }
        
        this.projects = this.projects.filter(project => project.id !== projectId);
    }

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }
}