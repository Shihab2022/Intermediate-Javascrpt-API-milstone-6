const searchButton = () => {
    const input = document.getElementById('get-input')
        // const searchText = input.value
    const inputValue = input.value
    input.value = ''

    const mealName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(mealName)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displaySearchResult(data.meals))

    // console.log(inputValue)

}

const displaySearchResult = meals => {

    // console.log(meals)
    const mainContainer = document.getElementById('main-container')
    mainContainer.textContent = '';

    for (const meal of meals) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `

        <div onclick="loadMealDetail(${meal.idMeal})"  class="card  shadow-lg pb-2 bg-body rounded h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fs-2 text-primary fw-bold">${meal.strCategory}</h5>
                        <p class="card-text ">${meal.strInstructions.slice(0,200)}</p>
                    </div>
                </div>
                `
        mainContainer.appendChild(div);
    }

}

const loadMealDetail = idMeal => {
    console.log(idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal => {
    const showSingleImage = document.getElementById('show-single-image')
    showSingleImage.textContent = '';
    const div = document.createElement('div')
    console.log(meal)
    div.innerHTML = `
    
    <div class="card bg-dark text-white  w-75">
    <img src="${meal.strMealThumb}"  class="card-img w-100" alt="...">
    <div class="card-img-overlay  d-grid justify-content-center align-items-center">
        <h5 class="card-title text-danger fs-1 text-center fw-bold">${meal.strMeal}</h5>
        <p class="card-text text-white fs-5 ">${meal.strInstructions.slice(0, 150)}</p>
        <p class="card-text text-black fs-5 "> It's a ${meal.strArea} food .</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Cook this food</a>
    </div>
</div>
`
    showSingleImage.appendChild(div)

}