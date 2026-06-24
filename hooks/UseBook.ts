import { useBooks } from "@/store/useBooks";
import useIndex from "./useIndex";
import { notFound } from "next/navigation";


export default function useBook(){
    const index = useIndex() ; 
    const { books } = useBooks();
    const book = books[index];
    console.log(book)
    
    if(!book){
        notFound()
    }

    return book
}