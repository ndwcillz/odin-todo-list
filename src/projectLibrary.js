import { Project } from './project.js';

export class ProjectLibrary {
    constructor() {
        this.projects = [];
    }

    addProject(name, description) {
        const project = new Project(name, description);
        this.projects.push(project);
        return project;
    }

    removeProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
    }
}