add_url = 'https://starwars.egghead.training/'

const responsePromise = fetch(add_url + 'films')
responsePromise
    .then(response => response.json())
    .then(films => console.log(films.length))
