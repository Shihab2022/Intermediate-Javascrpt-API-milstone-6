const sportsDb = () => {

    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => addName(data.sports))

}
sportsDb()

const addName = (datas) => {

    for (const data of datas) {
        const mainContainer = document.getElementById('main-container')
        const div = document.createElement('div')
        div.classList.add('style-card')

        div.innerHTML = `
    
<img style="height: 200px;border-radius: 20px;" width="100%" src="${data.strSportThumb}">
 
<div class="footer">
<div> <h2 style="color:red;">${data.strSport}</h2>
<h4>${data.strFormat}</h4></div>
<img  src="${data.strSportIconGreen}">
 </div>
<p>${data.strSportDescription.slice(0,300)}</p>

`
            // console.log(data)
        mainContainer.appendChild(div)

    }

}
const click = () => {
    console.log('hello')
}

{ /* <img src="${data.strSportIconGreen}"></img> */ }