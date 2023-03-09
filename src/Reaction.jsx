import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Reaction() {
    const [like, setLike] = useState(43);
    const [dislike, setDislike] = useState(15);

    return (
        <div className="App">
            <Badge badgeContent={like} color="primary">
                <IconButton onClick={() => { setLike(like + 1); }} aria-label="fingerprint" color="primary">
                    {/* <Fingerprint /> */}
                    👍
                </IconButton>
            </Badge>



            <Badge badgeContent={dislike} color="error">
                <IconButton onClick={() => { setDislike(dislike + 1); }} aria-label="fingerprint" color="error">
                    {/* <Fingerprint /> */}
                    👎
                </IconButton>
            </Badge>


        </div>
    );
}
