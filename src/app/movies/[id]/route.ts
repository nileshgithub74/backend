import { json } from "stream/consumers";
import { movies } from "../db";

interface Params{
    params: {
    id : string,
    }
}
export const GET= async (_req : Request, { params }: Params)=>{

   const {id} = await params;

//    movies.find((m) => m.id === parseInt(id));
 const movie = movies.find((m) => m.id === Number(id));

 return movie ? new Response(JSON.stringify(movie), {status : 200})
            : new Response("Movies Not Found, Please try again", {status : 404});




};


export  const PATCH = async(req : Request, {params}: Params)=>{

    const {id} = params;
    const movieId = +id;

  const  movie =   movies.find((m) => m.id === movieId);

  if(!movie){
    return new Response("Movies not found", {status : 404});

  }
  
  try{

    const updateMovie = await req.json();
    const index = movies.findIndex((m)=> m.id === movieId);
    if(!movie){
    return new Response("Movies not found", {status : 404});

  }

  // update the movies;

  movies[index] =  {...movie, ...updateMovie};
  return new Response(JSON.stringify(movies[index]), {status: 200});




  }catch(error){
    return new Response(JSON.stringify( {error: "failed to parse the json "}), {status : 404});
  }

  


    




}