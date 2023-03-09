import { Movie } from './Movie';

export function Movielist({ MovieData }) {
    return (
        <div>
            <div className='movie-data'>
                {MovieData.map((mv, index) => (
                    <Movie movie={mv} key={index} id={index} />
                ))}
            </div>
        </div>
    )
}