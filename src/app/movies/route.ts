
import {movies} from './db';

export const  GET = async ( )=>{
    return Response.json(movies);

}

export const POST =async (req : Request)=>{
    let movie = await  req.json();
    
    const newmovie = {id: movies.length+ 1, ...movie};
    movies.push(newmovie);
    return new Response(JSON.stringify(newmovie));

    

}