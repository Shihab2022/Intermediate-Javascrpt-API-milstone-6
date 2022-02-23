//randomli name add akorty chailay 

const addName = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBulders(data))
}

const displayBulders = data => {
    const bundies = data.results
    const user = document.getElementById('add-random-user');
    // console.log(result)
    for (const bundie of bundies) {
        const resultName = bundie.name
        const p = document.createElement('p')
            //sadaron vaby 
            // p.innerText = resultName;
            // dainamicaly
        p.innerHTML = `name : ${resultName.title} ${resultName.first} ${resultName.last}`
        user.appendChild(p)
            // console.log(resultName)

    }

}