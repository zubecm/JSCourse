'use strict'
let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberMyFilms();
detectPersonalLevel ();
showMyDB(personalMovieDB.privat);

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (i = 0; i < 2; i++) { 
        lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        ratingLastFilm = prompt('На сколько оцените его?', '');
        if (lastFilm != null && ratingLastFilm != null && lastFilm != '' && ratingLastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = ratingLastFilm;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Вы не любите фильмы')
    } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы хороший зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Error')
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}