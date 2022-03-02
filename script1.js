/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

/* for (let i = 0; i < 2; i++) {
    const oneOfWatchedFilm = prompt("Один из последних просмотренных фильмов?", ""),
        rateOfThisFilm = +prompt("На сколько оцените его?", "");
    
    if (oneOfWatchedFilm != null && rateOfThisFilm != null && oneOfWatchedFilm != "" && rateOfThisFilm != "" && +
    oneOfWatchedFilm.length < 50) {
        personalMovieDB.movies[oneOfWatchedFilm] = rateOfThisFilm;
    } else {
        i--;
    }
} */

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (30 > personalMovieDB.count <= 10) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

/* let j = 0;
while (j != 2) {
    const oneOfWatchedFilm = prompt("Один из последних просмотренных фильмов?", ""),
        rateOfThisFilm = +prompt("На сколько оцените его?", "");
    j++;
    if (oneOfWatchedFilm != null && rateOfThisFilm != null && oneOfWatchedFilm != "" && rateOfThisFilm != "" && +
    oneOfWatchedFilm.length < 50) {
        personalMovieDB.movies[oneOfWatchedFilm] = rateOfThisFilm;
    } else {
        j--;
    }
} */

let k = 0;
do {
    const oneOfWatchedFilm = prompt("Один из последних просмотренных фильмов?", ""),
        rateOfThisFilm = +prompt("На сколько оцените его?", "");
    k++;
    if (oneOfWatchedFilm != null && rateOfThisFilm != null && oneOfWatchedFilm != "" && rateOfThisFilm != "" && +
    oneOfWatchedFilm.length < 50) {
        personalMovieDB.movies[oneOfWatchedFilm] = rateOfThisFilm;
    } else {
        k--;
    }
} while (k != 2);
console.log(personalMovieDB);