
export default class Project {
    static projects = []

    constructor(title, desc, date, priority) {
        this.title = title
        this.desc = desc
        this.date = date
        this.priority = priority
    }

    static input() {
        const title = document.getElementById('title').value || 'No title'
        const desc = document.getElementById('desc').value || 'No description'
        const date = document.getElementById('date').value || 'No date'
        const radio = document.querySelector('input[name="priority"]:checked')
        const priorityColor = radio ? radio.value : 'green'

        return new Project(title, desc, date, priorityColor)
    }

    static add() {
        const newProject = Project.input()
        Project.projects.push(newProject)
        Project.setData()
        Project.render()
    }

    static render() {
        const projectContent = document.querySelector('.home-content')
        const projectLists = document.querySelectorAll('.project')
        projectLists.forEach(project => projectContent.removeChild(project))

        for (const project of Project.projects) {
            const card = createProjectCard(project)
            projectContent.appendChild(card)
        }
    }

    static setData() {
        localStorage.setItem('projects', JSON.stringify(Project.projects))
    }

    static restore() {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || []
        Project.projects = storedProjects
        Project.render()
    }

    static remove(index) {
        Project.projects.splice(index, 1)
        Project.setData()
        Project.render()
    }
}

const createProjectCard = (project) => {
    const card = document.createElement('div')
    card.className = 'card project shadow-sm'

    const head = document.createElement('div')
    head.className = 'd-flex align-items-start justify-content-between h-auto mb-2'

    const priority = document.createElement('i')
    priority.className = 'priority-icon fa-solid fa-check-double'
    priority.style.color = project.priority

    const date = document.createElement('p')
    date.textContent = project.date

    head.append(priority)
    head.append(date)

    const title = document.createElement('p')
    title.textContent = project.title
    title.className = 'fs-5 fw-medium mb-1'

    const desc = document.createElement('span')
    desc.textContent = project.desc
    desc.className = 'project-desc'

    const buttons = document.createElement('div')
    buttons.className = 'd-flex justify-content-end gap-2 mt-2'

    const edit = document.createElement('a')
    edit.className = 'btn btn-outline-primary btn-sm opacity-75 text-decoration-none'
    edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'

    const del = document.createElement('a')
    del.className = 'btn remove-project btn-outline-danger btn-sm opacity-75 text-decoration-none'
    del.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

    // * DELETE BUTTON

    del.addEventListener('click', () => {
        Project.remove(Project.projects.indexOf(project))
    })

    buttons.appendChild(edit)
    buttons.appendChild(del)

    card.append(head)
    card.append(title)
    card.append(desc)
    card.append(buttons)

    return card
}