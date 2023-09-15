import project from './project';

export default function loadHomePage() {
    const homeContent = document.querySelector('.home-content')
    const addBtn = document.getElementById('addProject')
    const addForm = document.getElementById('addProjectForm')

    addBtn.addEventListener('click', () => {
        homeContent.appendChild(project())
        addForm.reset()
    })
}