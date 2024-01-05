import logo from '../logo.svg';
import '../App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import Paging from './Paging';
import { useEffect, useState } from 'react';
import moviesJson from '../movies.json';

function MoviesList() {
  const [actualPage, setActualPage] = useState(1);

  let movies = moviesJson;
  const TOTAL_BY_PAGES = 3;

  // const searchMovies = async () => {
  //   let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
    
  //   let response = await fetch(url, {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     }
  //   });
  //   let json = await response.json();
  //   setMovies(json);
  // }

  let moviesByPage = movies.slice((actualPage - 1) * TOTAL_BY_PAGES, actualPage * TOTAL_BY_PAGES);

  const getTotalPages = () => {
    let movieQuantity = movies.length;
    return Math.ceil(movieQuantity / TOTAL_BY_PAGES);
  }
  return (
    <PageWrapper>
      {moviesByPage.map(movie =>
        <Movie
          title = {movie.title}
          calification = {movie.calification}
          director = {movie.director}
          stars = {movie.stars}
          release = {movie.release}
          duration = {movie.duration}
          img = {movie.img}>
          {movie.description}
        </Movie>
      )}
      <Paging actualPage={actualPage} totalPages={getTotalPages()} onChange={(page) => {
        setActualPage(page);
      }}/>
    </PageWrapper>
  );
}

export default MoviesList;
