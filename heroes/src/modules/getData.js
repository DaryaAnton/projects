const getData = () => {

    return fetch('./dbHeroes.json')
        .then(response => response.json())
}

export default getData;