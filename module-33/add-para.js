function addMultipalePara() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => giverPara(data))
}

addMultipalePara()

function giverPara(data) {
    const section = document.getElementById('mainSection')
    for (const getValue of data) {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1> ${getValue.title}how are you friend</h1>
        <p>${getValue.body}</p>
        `
        section.appendChild(div)
    }

}