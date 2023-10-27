import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Reaction } from './Reaction';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import { CardActions } from '@mui/material';



export function Movie({ movie, id }) {

    const navigate = useNavigate()
    // const movie =
    // {
    //   "name": "Thor: Ragnarok",
    //   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    //   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    //   "rating": 8.8
    // }
    const [toggle, setToggle] = useState(true);

    // const desc = {
    //   display: toggle ? "block" : "none",
    // };
    let style = {
        color: movie.rating >= 8.5 ? 'teal' : 'red'
    };


    return (
        <Card sx={{ maxWidth: 390, height: "min-content" }}><div className="movie-container">

            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <CardContent>
                <div className="movie-detail">
                    <h2 className="movie-title">{movie.name}

                        <IconButton className='toggle-btn' variant="outlined" color="dark" onClick={() => { setToggle(!toggle); }}>
                            {/* Conditional Rendering */}

                            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}

                        </IconButton>

                        <InfoIcon className='toggle-btn' variant="outlined" color="dark" onClick={() => { navigate(`/movies/${id}`) }}>


                        </InfoIcon>
                    </h2>

                    <p style={style} className="movie-rating"><span className='rating-color'>⭐{movie.rating}</span></p>

                </div>
                {/* Conditional Rendering */}
                {toggle ? <p className="movie-summary">{movie.summary}</p> : null}
            </CardContent>
            
            <CardActions>
                <Reaction />
            </CardActions>

        </div></Card>
    );
}
