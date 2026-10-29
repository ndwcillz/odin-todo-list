export function save(projectLibrary) {
    const data = JSON.stringify(projectLibrary);
    localStorage.setItem('projectLibrary', data);
}   