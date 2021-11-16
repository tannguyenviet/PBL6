const apiKey = '7bc4b591e6a52add38951fed88df21fd';
const fetch = require('node-fetch');
//globalThis.fetch = fetch



async function getListFilmIds(string) {

    let filmsLink = `https://api.themoviedb.org/3/movie/${string}?api_key=${apiKey}`
    return fetch(filmsLink)
        .then(response => response.json())
        .then(data => data.results.map(r => r.id));

}

function getDetailForEachFilm(id) {
    let linkDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    return fetch(linkDetail)
        .then(response => response.json())
        .then(data => {
            return {
                idFilmsOnWeb: data.id,
                name: data.original_title,
                time_release: data.release_date,
                country: data.production_companies[0].origin_country,
                director: data.production_companies[0].name,
                duration: data.runtime,
                labor: data.adult == true ? "C18" : "C16",
                stars: null,
                description: data.overview,
                hashtag: data.genres.map(r => r.name).join(", "),
                rating: data.vote_average,
                image: 'https://image.tmdb.org/t/p/w500' + data.poster_path,
                trailer: null
            }
        })
}

function getStarsForEachFilm(id) {
    let linkStars = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    return fetch(linkStars)
        .then(response => response.json())
        .then(data => data.cast.map(r => r.name).join(', '))
}

function getTrailerForEachFilm(id) {
    let linkTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    return fetch(linkTrailer)
        .then(response => response.json())
        .then(data => 'https://www.youtube.com/embed/' + data.results.find(r => r.type === 'Trailer').key)
}

function getCompleteDetailFilm(id) {
    const func1 = getDetailForEachFilm(id)
    const func2 = getStarsForEachFilm(id)
    const func3 = getTrailerForEachFilm(id)
    return Promise.all([func1, func2, func3])
        .then(([data, stars, trailer]) => {
            data.stars = stars;
            data.trailer = trailer;
            return data;
        });
}

async function getListDetailFilms(listIds) {
    const unresolvedPromises = listIds.map(id => getCompleteDetailFilm(id));
    const results = await Promise.all(unresolvedPromises);
    return results
}

async function listFilms() {
    const listDetails = await getListDetailFilms(listIds)
    return listDetails
}

// const ids = await getListFilmIds('now_playing')
// console.log(ids)
// (async() => {
//     const listIds = await getListFilmIds('now_playing');
//     return await getListDetailFilms(listIds)

// })();

module.exports = {
    getListFilmIds,
    getListDetailFilms
};