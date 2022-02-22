function addEvent() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => addFunction(data))

}


function addFunction(data) {
    const ul = document.getElementById('user');

    for (const users of data) {
        const li = document.createElement('li');
        // li.innerText = users.name;  //for name
        // li.innerText = users.email; //for email
        li.innerText = `Client Name : ${users.name}  and    Your email address : ${users.email}`; //dainamically add 
        ul.appendChild(li)
    }
}