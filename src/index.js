//TODO Lists of nav links : Home, Today, This week and This month
//TODO view all projects in home page
//TODO View all todos in project when clicked
//TODO Display title, due date and color priority type in each todo
//TODO Add edit todo functionality
//TODO Add delete todo functionality
//TODO Filter todos to display in today, this week and this month
//TODO Add sorting by date and priority in home, today, this month and this month page











// * ONLOAD

window.addEventListener('DOMContentLoaded', () => {


    // Display year in footer

    document.getElementById('year')
        .textContent = new Date().getFullYear()
})