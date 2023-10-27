import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';

export function Reaction() {
    const [like, setLike] = useState(34);
    const [dislike, setDislike] = useState(12);

    return (
        <div className="App">
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>

            <IconButton onClick={() => { setLike(like + 1); }} aria-label="like" color="primary">
                <Badge badgeContent={like} color="primary">
                    {/* <Fingerprint /> */}
                    👍
                </Badge>
            </IconButton>


            <IconButton onClick={() => { setDislike(dislike + 1); }} aria-label="dislike" color="error">
                {/* <Fingerprint /> */}
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>





        </div>
    );
}
