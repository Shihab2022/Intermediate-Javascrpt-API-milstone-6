const inputBtn = () => {

    const inputfield = document.getElementById('input-field').value;
    // console.log(inputfield);

    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputfield}`)
        .then(response => response.json())
        .then(data => playersDetiles(data.player))
    document.getElementById('input-field').value = ''
}


const playersDetiles = (players) => {
    const mainCard = document.getElementById('main-card')
    mainCard.innerHTML = ''
    for (const player of players) {
        // console.log(player);

        const div = document.createElement('div')
        div.classList.add('col-md-6')
        div.innerHTML = `
        
        <div class="card shadow-lg my-4" style="width: 20rem;">
    
    <img src="${player.strThumb}" class="card-img-top" alt="...">

        <div class="card-body">
            <h5 class="card-title">Name : ${player.strPlayer}</h5>
            <p class="card-text">Date Of Birth  : ${player.dateBorn}</p>
            <p class="card-text">Birth Location : ${player.strBirthLocation}</p>
            <p class="card-text">Detiles : ${player.strDescriptionEN?.slice(0,100)}</p>
          
            <button onclick="playerDetiles('${player.idPlayer}')" class="btn btn-primary">Detiles</button>
        </div>
        `
        mainCard.appendChild(div)
    }

}

const playerDetiles = (playerId) => {

    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
    fetch(url)
        .then((response) => response.json())
        .then(data => singlePlayer(data.players[0]))

}

const singlePlayer = data => {

    console.log(data)

    // console.log(player);
    const palyerDetiles = document.getElementById('player-detiles')
    palyerDetiles.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('col-md-12')
    div.innerHTML = `
        
    <div style="width: 80%; margin-left:10%; padding:10px">

    <img src="${data.strThumb}" style="width:100%; height:20%" alt="...">

    <div class="card-body">
        <h5 class="card-title">Name : ${data.strPlayer}</h5>
        <p class="card-text">Position : ${data.strPosition}</p>
        <p class="card-text">Nationality : ${data.strNationality}</p>
        <p class="card-text">Gender : ${data.strGender}</p>
        <p class="card-text">Team : ${data.strTeam}</p>
        <p class="card-text">Date Of Birth  : ${data.dateBorn}</p>
        <p class="card-text">Birth Location : ${data.strBirthLocation}</p>
        <p class="card-text">Detiles : ${data.strDescriptionEN}</p>

    </div>
</div>
        `
    palyerDetiles.appendChild(div)
}