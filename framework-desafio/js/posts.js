fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    for(post of json){
        populateTable(post);
    }
});

function populateTable(post){
    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');

    const userIdTd = document.createElement('td');
    userIdTd.textContent = post.userId;

    const postTitleTd = document.createElement('td');
    postTitleTd.textContent = post.title;

    const postBodyTd = document.createElement('td');
    postBodyTd.textContent = post.body;

    row.appendChild(userIdTd);
    row.appendChild(postTitleTd);
    row.appendChild(postBodyTd);
    tbody.appendChild(row);
}
