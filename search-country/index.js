const showAllCountryName = () => {
    fetch('https://restcountries.com/v2/all')
        .then(resp => resp.json())
        .then(data => getData(data))
}


const showAcia = () => {
    fetch('https://restcountries.com/v2/continent/europe')
        .then(res => res.json())
        .then(data => getData(data))
        // console.log('hello')
}

const getData = (data) => {
    // console.log(data)
    for (const names of data) {
        const addgrid = document.getElementById('addSingleDetiles')
        const div = document.createElement('div')
        div.innerHTML = `  <div class="card card-design border-2 p-3 ">
      <img style=" height:250px;" class=" w-100 " src="${names.flag}">

        <h4>Name : ${names.name} </h4>
<p "> Capital : ${names.capital} </p>
<p> Time Zone : ${names.timezones.slice(0,9)} </p>
<p> Population : ${names.population} </p>
<p> Region  : ${names.region} </p>
    </div>
    `
        addgrid.appendChild(div)
    }
}