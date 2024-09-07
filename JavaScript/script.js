"use strict";

const numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const repeat = 2;

for(let i = 0; i < repeat; i++){
    const ask1 = prompt("Один из последних просмотренных фильмов?", ''),
        ask2 = prompt("На сколько оцените просмотренный фильм по 10 школе?", '');

    if(ask1.length < 50 && ask1 != '' && ask2 != '' && ask1 != null && ask2 != null){
        personalMoviesDB.movies[ask1] = ask2;
    }else{
        console.log('Error');
        i--;
    }
}

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

console.log(personalMoviesDB);