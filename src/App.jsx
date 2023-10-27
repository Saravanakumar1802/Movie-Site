import './App.css';
import * as React from 'react';
import { useState } from 'react';
// import Fingerprint from '@mui/icons-material/Fingerprint';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Movielist } from './Movielist';
import { AddMovie } from './AddMovie';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import FastRewindTwoToneIcon from '@mui/icons-material/FastRewindTwoTone';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Home } from './Home';



export default function App() {
  const [MovieData, setMovieData] = useState([
    {
      "name": "God of War Ragnarok",
      "poster": "https://pbs.twimg.com/media/E-35O9KVcAQG3aB?format=jpg&name=large",
      "summary": "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series.",
      "rating": 9.7,
      "trailer": "https://www.youtube.com/embed/hfJ4Km46A-0",
      "id": "97",
    },
    {
      "id": "106",
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      "id": "101",
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. ",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      "id": "99",
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
      "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
      "id": "100",
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },

    {
      "id": "102",
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      "id": "103",
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      "name": "PS2",
      "poster": "https://th.bing.com/th/id/OIP.QPeeuEvOphId8L0psCtH5QHaLH?pid=ImgDet&rs=1",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8,
      "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
      "id": "108"
    },
    {
      "id": "104",
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      "id": "105",
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      "id": "107",
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8,
      "trailer": "https://youtu.be/NgsQ8mVkN8w",
      "id": "109",
    },
    {
      "id": "98",
      "name": "Marvel's Avengers",
      "poster": "https://cdn-products.eneba.com/resized-products/HAQMjH2Ux8QFK7HRgxn1bPmckv9xxTICEV0anu1BVXM_350x200_1x-0.jpeg",
      "rating": 8,
      "summary": "Marvel's Avengers is a 2020 action-adventure video game developed by Crystal Dynamics and published by Square Enix Europe. Based on the Marvel Comics superhero team the Avengers, the game is mainly inspired by the Marvel Cinematic Universe's iteration of the group.",
      "trailer": "https://www.youtube.com/embed/LDBojdBAjXU",
    }
  ]
  );

  const navigate = useNavigate();



  return (
    <div className="App">

      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}><h4>Home</h4></Button>
          <Button color="inherit" onClick={() => navigate("/movies")} ><h4>Movies</h4></Button>
          <Button color="inherit" onClick={() => navigate("/movies/add")} ><h4>Add Movies</h4></Button>
        </Toolbar>
      </AppBar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movies/add' element={<AddMovie MovieData={MovieData} setMovieData={setMovieData} />} />
        <Route path='/movies' element={<Movielist MovieData={MovieData} />} />
        {/* <Route path='addmovie' element={ AddMovie} /> */}
        <Route path='/movies/:id' element={<MoviesInfo MovieData={MovieData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}


function Error() {
  return (
    <div>
      <h1>Not Found 404</h1>
      <img className='error-page' src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif" alt="404 Error" />
    </div>
  )
}

function MoviesInfo({ MovieData }) {
  const navigate = useNavigate();
  const { id } = useParams()
  // console.log(MovieData[id]);
  console.log(MovieData[0].trailer);
  let movie = MovieData[id]

  let styles = {
    color: movie.rating >= 8.5 ? "teal" : "red",
  };

  return (
    <div className='info-container'>
      {/* <div>
        <h1 style={{ color: 'black' }}>This is info page {id}</h1>
      </div> */}

      <iframe width="80%" height="702" src={movie.trailer} title={movie.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
      <div className="trailer-title">
        <div className="movie-detail">
          <h2 className="movie-title">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        {/* Conditional Rendering */}
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button variant="contained" startIcon={<FastRewindTwoToneIcon />} color="primary" className='back-btn' onClick={() => navigate(-1)}>Back</Button>
    </div>
  )
}


