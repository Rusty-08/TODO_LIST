import Home from './components/home'
import Project from './components/project'

//TODO Lists of nav links : Home, Today, This week and This month
//TODO view/add projects in home page
//TODO View all todos in project when clicked
//TODO Display title, due date and color priority type in each todo
//TODO Add edit todo functionality
//TODO Add delete todo functionality
//TODO Filter todos to display in today, this week and this month
//TODO Add sorting by date and priority in home, today, this month and this month page


// * ADD PROJECT WHEN ADD BUTTIN IN MODAL IS CLICKED

const addBtn = document.getElementById('addProject')

addBtn.addEventListener('click', Project.add)

// * ONLOAD

document.addEventListener('DOMContentLoaded', () => {

    Home.load()

    document.getElementById('year')
        .textContent = new Date().getFullYear()
})