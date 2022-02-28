const inputBtn = () => {

    const inputfield = document.getElementById('input-field').value;
    // console.log(inputfield);

    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputfield}`)
        .then(response => response.json())
        .then(data => playerDetiles(data.player))
}


const playerDetiles = (players) => {
    // console.log(players)
    for (const player of players) {
        console.log(player);
        const mainCard = document.getElementById('main-card')
        const div = document.createElement('div')
        div.classList.add('col-lg-6')
        div.innerHTML = `
        
        <div class="card shadow-lg my-4" style="width: 20rem;">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name : ${player.strPlayer}</h5>
            <p class="card-text">Bron : ${player.dateBorn}</p>
          
            <p class="card-text">Birth Location : ${player.strBirthLocation}</p>
            <button onclick="playerD('${player.dateBorn}')" class="btn btn-primary">Detiles</button>
        </div>
        `
        mainCard.appendChild(div)
    }

}

const playerD = (result) => {
    console.log(result)
}

// function playerDetiles(result) {
//     console.log(result)
// }
// {  }
{ /* <p class="card-text">Bron : ${player.strDescriptionEN?.slice(0,10)}</p> */ }