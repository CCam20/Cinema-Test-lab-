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
}

Cinema.prototype.findByGenre= function(films, genre){
  let result = 0
  films.filter((film)=>{if(film.genre === genre){
    result = film
  }}); return result

}












module.exports = Cinema;