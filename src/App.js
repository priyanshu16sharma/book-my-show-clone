import './App.css';
//Routing
import { Routes, Route} from "react-router-dom";
//react-slick-css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//axios
import axios, { Axios } from 'axios';
//pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]= "56554626ed3def89e89303ba9249c62f"

function App() {

    return <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path='/plays' element={<PlayPage/>}/>


    </Routes>;
}

export default App;
