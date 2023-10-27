import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import "./App.css"
import { Margin } from '@mui/icons-material';


export function AddMovie({ setMovieData, MovieData }) {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [poster, setPoster] = useState();
    const [rating, setRating] = useState();
    const [summary, setSummary] = useState();


    return (
        <div>
            <div className="add-movie">
                <TextField id="standard-basic" label="Movie Name" variant="standard" color="primary"
                    onChange={(e) => setName(e.target.value)} value={name} focused />
                <TextField id="standard-basic" label="poster" variant="standard" color="primary"
                    onChange={(e) => setPoster(e.target.value)} value={poster} focused />
                <TextField id="standard-basic" label="rating" variant="standard" color="primary"
                    onChange={(e) => setRating(e.target.value)} value={rating} focused />
                <TextField id="standard-basic" label="summary" variant="standard" color="primary"
                    onChange={(e) => setSummary(e.target.value)} value={summary} focused />
                <Button onClick={() => {
                    const newMovie = {
                        name: name,
                        poster: poster,
                        rating: rating,
                        summary: summary,
                    };
                    setMovieData([...MovieData, newMovie]);
                    // navigate(-1)
                    navigate("/movies")
                }} className='toggle-btn' endIcon={<SendIcon />} variant="contained">Add Movie
                </Button>
            </div>


        </div>
    );
}
