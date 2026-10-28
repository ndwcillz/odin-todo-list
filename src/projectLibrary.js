import { Project } from './project.js';

export class ProjectLibrary {
    constructor() {
        this.projects = [];
        this.defaultProject = new Project('First Project', 'This is your first project.');
        this.projects.push(this.defaultProject);
    }

    addProject(name, description) {
        const project = new Project(name, description);
        this.projects.push(project);
        return project;
    }

    removeProject(projectId) {
        if (this.projects.length === 1) {
            return; // Prevent removing all projects, keep at least one project
        }
        
        this.projects = this.projects.filter(project => project.id !== projectId);
    }

    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    }
}