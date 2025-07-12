
import  {movies} from '../moives/db';

// export const  GET = async ( )=>{
//     return Response.json(movies);

// }

export const POST =async (req : Request)=>{
    let movie = await req.json();
    console.log(movie);

    

}