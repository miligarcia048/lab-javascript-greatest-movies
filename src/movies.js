const allMovies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((item) => item.director);
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArray = moviesArray.filter((item) => {
        return item.genre.includes("Drama") && item.director == "Steven Spielberg";
    }).length;
    return newArray;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length > 0) {
        const average =
            moviesArray
            .filter((item) => item.score)
            .reduce((total, next) => total + next.score, 0) / moviesArray.length;
        var rounded = Math.round((average + Number.EPSILON) * 100) / 100;

        return rounded;
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length > 0) {
        const drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
        const averageDrama = scoresAverage(drama);
        return averageDrama;
    } else {
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
        .sort((a, b) => {
            if (a.year < b.year) {
                return -1;
            }
            if (a.year > b.year) {
                return 1;
            } else if (a.year === b.year) {
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            }
            return 0;
        })
        .map((item) => item);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArray = moviesArray.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    const titles = newArray.map((movie) => movie.title).slice(0, 20);
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = moviesArray.map((movie) => {
        return minutes(movie);
    });

    function minutes(movie) {
        if (typeof movie.duration === "number") {
            return movie;
        }
        const movieDuration = movie.duration;

        const timeString = movieDuration.split(" "); //split the time into 2

        const minutesDuration = timeString.reduce(function(total, string) {
            if (string.includes("h")) {
                const numOfHours = parseInt(string);
                return total + numOfHours * 60;
            } else {
                const numOfMinutes = parseInt(string);
                return total + numOfMinutes;
            }
        }, 0);

        movie.duration = minutesDuration; // put new value of minutes on the array

        return movie;
    }

    return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}