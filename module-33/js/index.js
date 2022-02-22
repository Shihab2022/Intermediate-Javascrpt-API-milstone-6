fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => addEvent(data))


function addEvent(data) {
    // const ul = document.getElementById('user');

    for (const users of data) {
        console.log(users)
    }


}