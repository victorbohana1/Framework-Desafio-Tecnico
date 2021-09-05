fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(json => {
    for(album of json){
        populateTable(album);
    }
});

function populateTable(album){
    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');

    const userIdTd = document.createElement('td');
    userIdTd.textContent = album.userId;

    const albumTitleTd = document.createElement('td');
    albumTitleTd.textContent = album.title;

    row.appendChild(userIdTd);
    row.appendChild(albumTitleTd);
    tbody.appendChild(row);
}