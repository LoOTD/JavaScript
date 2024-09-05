"use strict";

const numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const ask1 = prompt("Один из последних просмотренных фильмов?", ''),
      ask2 = prompt("На сколько оцените просмотренный фильм по 10 школе?", ''),
      ask3 = prompt("Один из последних просмотренных фильмов?", ''),
      ask4 = prompt("На сколько оцените просмотренный фильм по 10 школе?", '');

personalMoviesDB.movies[ask1] = ask2;
personalMoviesDB.movies[ask3] = ask4;

console.log(personalMoviesDB);