"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyfilms(){
    const repeat = 2;

    for(let i = 0; i < repeat; i++){
        const ask1 = prompt("Один из последних просмотренных фильмов?", ''),
            ask2 = prompt("На сколько оцените просмотренный фильм по 10 школе?", '');

        if(ask1.length < 50 && ask1 !== '' && ask2 !== '' && ask1 != null && ask2 != null){
            personalMoviesDB.movies[ask1] = ask2;
        }else{
            console.log('Error');
            i--;
        }
    }
}

// rememberMyfilms();

function detectPersonalLevel(){
    if(personalMoviesDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
        console.log('Просмотрено довольно мало фильмов');
    }else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
        alert('Вы классический зритель');
        console.log('Вы классический зритель');
    }else if(personalMoviesDB.count >= 30){
        alert('Вы киноман');
        console.log('Вы киноман')
    }else{
        alert('Произошла ошибка')
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if(hidden === false){ //(!hidden) не скрыта у нас false перейдет в true;
        console.log(personalMoviesDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
showMyDB(personalMoviesDB.privat);
// console.log(personalMoviesDB);