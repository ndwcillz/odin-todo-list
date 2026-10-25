import './styles.css';
import { ProjectLibrary } from './projectLibrary.js';

const projectLibrary = new ProjectLibrary();
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