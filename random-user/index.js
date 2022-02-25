const getDataServer = () => {
    fetch('https://randomuser.me/api/?results=1000')
        .then(res => res.json())
        .then(data => singleData(data.results))

}
getDataServer()

const singleData = (datas) => {
    // console.log(datas)
    const main = document.getElementById('card-section')
    for (const data of datas) {
        const div = document.createElement('div')
        div.classList.add('col-lg-4')

        div.innerHTML = `
         <div class="card border-0 shadow rounded-3 my-3" style="width: 90%;background-color:antiquewhite;">
        <img src="${data.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name : ${data.name.title} ${data.name.first} ${data.name.last}</h5>
            <p class="card-text">Email : ${data.email}</p>
            <p class="card-text">Id : ${data.id.value}</p>
            <button onclick="getOne('${data}')" class="btn btn-info shadow-lg ">Detiles</button>
        </div>
    </div>
    `
            // div.appendChild('html')
        main.appendChild(div)

        // console.log(data.picture.large)
        // console.log(data)
    }

}



// wrong
const getOne = (data) => {

    const div = document.createElement('div')

    // div.innerHTML = `
    // <div id="user" class="row my-5 rounded-3 w-75 g-0  bg-info ">

    //             <div class="col-md-6 mb-md-0 p-md-4">
    //                 <img src="baby4.jpg" class="w-100" alt="...">
    //             </div>
    //             <div class="col-md-6 p-4 ps-md-0">
    //                 <h5 class="mt-0">Columns with stretched link</h5>
    //                 <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    //                 <a href="#" class="stretched-link">Go somewhere</a>
    //             </div>
    //         </div>
    //         `
    // userDetiles.appendChild(div)

    document.getElementById('user').style.display = 'block'
    console.log(email)
}