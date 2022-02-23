function showAllCountries() {

    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => countries(data))
}

showAllCountries()
const countries = (data) => {
    const addCountry = document.getElementById('add-country')
        // console.log(data)
    for (const user of data) {

        //comon niom ay 

        /*    const div = document.createElement('div')
           div.classList.add('country')
           const h2 = document.createElement('h2')
           const p = document.createElement('p')
           h2.innerText = user.name
           div.appendChild(h2)
           p.innerText = user.capital
           div.appendChild(p)
           addCountry.appendChild(div) */





        //dainamically

        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h2> ${ user.name} </h2>
        <p>${user.capital}</p>
        <button onclick="countryDetiles('${user.name}')"> Detiles </button>
        `
        addCountry.appendChild(div)
    }

}

const countryDetiles = (countryName) => {
    const name = `https://restcountries.com/v2/name/${countryName}`
    fetch(name)
        .then(res => res.json())
        .then(data => addDetiles(data))
}

const addDetiles = data => {
    const detiles = data[0]
    const countryDetiles = document.getElementById('detiles');
    countryDetiles.innerText = '';
    const div = document.createElement('div');
    div.classList.add("img-responsive")
    div.innerHTML = `Country Name : <h2> ${ detiles.name} </h2>
   Capital: <p>${detiles.capital}</p>
    Area: <p>${detiles.area}</p>
   Population : <p>${detiles.population}</p>
     <img style="width:250px;"  src="${ detiles.flag}">
    `

    countryDetiles.appendChild(div)

    console.log(data);

}