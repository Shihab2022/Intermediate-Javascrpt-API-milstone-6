//randomli name add akorty chailay 

const addName = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => displayBulders(data))
}

const displayBulders = data => {
    const bundies = data.results
    const user = document.getElementById('add-random-user');
    console.log(data)
        // console.log(bundies)
    for (const bundie of bundies) {
        const resultName = bundie.name
        const p = document.createElement('p')
            // const p2 = document.createElement('p')
            //sadaron vaby 
            // p.innerText = resultName;
            // dainamicaly
        const email = bundie.email
        const male = bundie.gender
        const picture = bundie.picture
            // p2.innerHTML = `Email : ${email}`
            // console.log(email)
        p.innerHTML = `<img src="${picture.large}">
        
        name : ${resultName.title} ${resultName.first} ${resultName.last} , Your gender is ${male} , Email : ${email}`
        user.appendChild(p)
            // user.appendChild(p2)
            // console.log(resultName)
    }
}

// separate male femla

/* const separateMaleFemale = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => separate(data))
}

const separate = (data) => {

    const maleFemales = data.results;
    // const user = document.getElementById('separate-male-felmale')
    for (const maleFemale of maleFemales) {
        const male = maleFemale.gender
        console.log(male)
    }

} */