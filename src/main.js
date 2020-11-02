//SEACRH BY NAME
function searchByName(cocktailName) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
        .then(response => response.json() )
        .then(data => console.log('Success:', data) );
}
console.log(searchByName("alexander"))

//SEARCH BY ID
function searchById(cocktailId) {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
        .then(response => response.json() )
        .then(data => console.log('Success:', data) );
}
console.log(searchById("11118"))

//THE MOST POPULAR LIST
function topTenList() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/popular.php')
        .then(response => response.json() )
        .then(data => console.log('Success:', data) );
}
console.log(topTenList())