/*


add_url = 'https://starwars.egghead.training/'
const responsePromise = fetch(add_url + 'films')


responsePromise
    .then(response => response.json())
    .then(films => {
        const filmTiltle =  films
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(film => `${film.episode_id} ${film.title}`)
            .join('\n')

        const output = document.getElementById('output')
        output.innerText = filmTiltle
    })
*/

add_url = 'https://starwars.egghead.training/'
const responsePromise = fetch(add_url + 'films')
const output = document.getElementById('output')
output.innerText = 'Loading....!'

responsePromise
.then(response => response.json())
.then(films =>{
    output.innerText = getFilms(films)
})

function getFilms(film) {
    return film
        .sort((a,b) => a.episode_id - b.episode_id)
        .map(filmtitle => `${filmtitle.episode_id} ${filmtitle.title}`)
        .join('\n')
}