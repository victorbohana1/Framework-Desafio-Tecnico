const table = document.querySelector('table');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => {
    for(todo of json){
        populateTable(todo);
    }
});

function populateTable(todo){
    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');

    const userIdTd = document.createElement('td');
    userIdTd.textContent = todo.userId;

    const todoTitleTd = document.createElement('td');
    todoTitleTd.textContent = todo.title;

    const todoCompletedTd = document.createElement('td');
    const todoCompletedIcon = document.createElement('i');

    if(todo.completed === false){
        todoCompletedIcon.classList.add('fa');
        todoCompletedIcon.classList.add('fa-window-close')
        todoCompletedIcon.style.color = 'red';
    }else{
        todoCompletedIcon.classList.add('fa');
        todoCompletedIcon.classList.add('fa-check-square');
        todoCompletedIcon.style.color = 'green';
    }

    todoCompletedIcon.classList.add('todo-icon');

    todoCompletedTd.appendChild(todoCompletedIcon);
    row.appendChild(userIdTd);
    row.appendChild(todoTitleTd);
    row.appendChild(todoCompletedTd);
    tbody.appendChild(row);
}


