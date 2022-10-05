const Cinema = function (films) {
  this.films = films;
};




Cinema.prototype.returnAllFilms = function(films){
const result = []
films.forEach((film)=>{result.push(film)  
});return result
};

Cinema.prototype.findByTitle= function(films, title){
let result = 0
films.filter((film)=>{if(film.title === title){
  result = film
}}); return result
};

Cinema.prototype.findByGenre= function(films, genre){
  let result = 0
  films.filter((film)=>{if(film.genre === genre){
    result = film
  }}); return result

};
Cinema.prototype.findByYear = function (films, year){
  let result = 0
  films.filter((film)=>{if(film.year === year){
    result = film
  }}); return result

};
Cinema.prototype.movieLength=function(films, length){
  const result = []
  films.filter((film) => {if(film.length > 120){
    result.push(film)
  }}); return result
};


Cinema.prototype.totalLength = function (films){
  let result = 0
  films.map((film)=>{result+=film.length})
  return result
};











module.exports = Cinema;