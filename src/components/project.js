
// export class Project {
//     constructor() {
//         this.title = title
//         this.desc = desc
//         this.dueDate = dueDate
//         this.priority = priority
//     }

//     static add() {
//         return createProject(
//             this.title,
//             this.desc,
//             this.dueDate,
//             this.priority
//         )
//     }
// }

// * test project creation

const createProject = (titleValue, descValue, dateValue, priorityColor) => {
    const card = document.createElement('div')
    const title = document.createElement('p')
    const desc = document.createElement('span')
    const date = document.createElement('p')
    const priority = document.createElement('i')
    const head = document.createElement('div')


    priority.className = 'priority-icon fa-solid fa-check-double'
    priority.style.color = priorityColor

    date.textContent = dateValue

    head.className = 'd-flex align-items-start justify-content-between h-auto mb-2'
    head.appendChild(priority)
    head.appendChild(date)

    title.textContent = titleValue
    title.className = 'fs-5 fw-medium mb-1'

    desc.textContent = descValue
    desc.className = 'project-desc'

    card.appendChild(head)
    card.appendChild(title)
    card.appendChild(desc)

    card.className = 'card project shadow-sm'

    return card
}

export default function project() {
    const title = document.getElementById('title').value || 'No title'
    const desc = document.getElementById('desc').value || 'No description'
    const date = document.getElementById('date').value || 'No date'
    const radio = document.querySelector('input[name="priority"]:checked')

    const priorityColor = radio ? radio.value : 'green'

    return createProject(title, desc, date, priorityColor)
}
