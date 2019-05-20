let movies = [
  { id: 0, name: "Star Wars", score: 18 },
  { id: 1, name: "Kim", score: 28 },
  { id: 2, name: "Lee", score: 13 },
  { id: 3, name: "Park", score: 58 },
  { id: 4, name: "John", score: 48 },
  { id: 5, name: "Sam", score: 17 }
];

export const getMovies = () => movies;

export const getById = id => movies.filter(movie => id === movie.id)[0];

export const deleteMovie = id => {
  const filterdMovies = movies.filter(movie => movie.id !== id);
  if (filterdMovies.length === movies.length) {
    movies = filterdMovies;
    return true;
  } else return false;
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies = [...movies, newMovie];
  return newMovie;
};
