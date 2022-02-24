const searchButton = () => {
    const input = document.getElementById('get-input')
        // const searchText = input.value
    const inputValue = input.value
        // input.value = ''

    const mealName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    fetch(mealName)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displaySearchResult(data.meals))

    // console.log(inputValue)

}

const displaySearchResult = meals => {

    console.log(meals)
    const mainContainer = document.getElementById('main-container')
    mainContainer.textContent = '';

    for (const meal of meals) {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card  shadow-lg pb-2 bg-body rounded">
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