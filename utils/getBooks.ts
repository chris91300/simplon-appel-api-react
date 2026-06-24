import { type openLibraryResponse } from "@/types/types";
import { getFetch } from "./getFetch";


export async function getBooks(){
    const url = "https://openlibrary.org/authors/OL19981A/works.json";
    try{
        const books: openLibraryResponse = await getFetch(url);        
        return books.entries;
    }catch(err){
        if(err instanceof Error){
            console.log(err)
        }else{
            console.log("Une erreur c'est produite lors de la récupération des livres")
        }
        throw new Error("Une erreur c'est produite lors de la récupération des livres");
        
    }
    
}