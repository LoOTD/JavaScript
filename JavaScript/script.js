"use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMoviesDB.count = +prompt("Сколько фильмов вы просмотрели?", "");

        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt("Сколько фильмов вы просмотрели?", "");
        }
    },

    rememberMyfilms: function() {
        const repeat = 2;

        for(let i = 0; i < repeat; i++){
            const ask1 = prompt("Один из последних просмотренных фильмов?", ''),
                ask2 = prompt("На сколько оцените просмотренный фильм по 10 школе?", '');

            if(ask1.length < 50 || ask1 !== '' || ask2 !== '' || ask1 != null || ask2 != null){
                personalMoviesDB.movies[ask1] = ask2;
            }else{
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            alert('Вы классический зритель');
            console.log('Вы классический зритель');
        } else if (personalMoviesDB.count >= 30) {
            alert('Вы киноман');
            console.log('Вы киноман')
        } else alert('Произошла ошибка')
    },
    showMyDB: function(hidden) {
        if(hidden === false){ //(!hidden) не скрыта у нас false перейдет в true;
            console.log(personalMoviesDB);
        }
    },

    toggleVisibleMyDB: () =>{
        if(personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        }
        else {
            personalMoviesDB.privat = true;
        }
    },

    writeYourGenres: ()=> {
        for (let i = 1; i <= 3; i++){
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genres !== '' || genres != null){
                personalMoviesDB.genres[i - 1] = genres;
            }else{
                console.log('Error');
                i--;
            }
        }
        personalMoviesDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    // forEach:() => {
    //     for(let i = 0; i < personalMoviesDB.genres.length; i++){
    //         console.log(`Любимый жанр ${i + 1} - это ${personalMoviesDB.genres[i]}`);
    //     }
    // }
};

// personalMoviesDB.start();
// // personalMoviesDB.rememberMyfilms();
// personalMoviesDB.detectPersonalLevel();
//
// personalMoviesDB.writeYourGenres();
// personalMoviesDB.showMyDB(personalMoviesDB.privat);