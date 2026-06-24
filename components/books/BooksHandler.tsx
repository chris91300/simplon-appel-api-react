'use client'

import { getBooks } from "@/utils/getBooks";
import Loading from "../loading/Loading";
import { useEffect, useState } from "react";
import { Books } from "./Books";
import { useBooks } from "@/store/useBooks";



export default function BooksHandler(){
    const { books, setBooks } = useBooks();
    const [err, SetError] = useState("");
    const [state, setState] = useState<"pending" | "completed" | "error">("pending");
    
    useEffect(()=>{
        
        if(books.length === 0){
            console.log("Aucun livre dans le store. Je fais donc une requete vers openLibrary")
            const getStephenKingBooks = async () => await getBooks();
            getStephenKingBooks()
            .then(books => {
                setBooks(books);
                setState("completed");
            })
            .catch(err => {
                SetError(err.message);
                setState("error");
            });
        }else{
            console.log("j'ai déjà les livres")
            setState("completed");
        }
    }, [])

    return (
        <div>
            { state === "pending" && <Loading /> }
            { state === "completed" && <Books /> }
            { state === "error" && <p className="text-red-400">{err}</p> }
        </div>
         
    )
}