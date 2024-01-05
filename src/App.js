import logo from './logo.svg';
import './App.css';
import Movie from './views/Movie';
import PageWrapper from './views/PageWrapper';
import Paging from './views/Paging';
import { useEffect, useState } from 'react';
import moviesJson from './movies.json';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from'./views/Blog';
import MoviesList from './views/MoviesList';

function App() {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<MoviesList/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
  );
}

export default App;
