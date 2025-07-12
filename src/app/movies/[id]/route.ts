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