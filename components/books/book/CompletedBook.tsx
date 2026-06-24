'use client'

import useBook from "@/hooks/UseBook";
import useIndex from "@/hooks/useIndex";
import { useBooks } from "@/store/useBooks"
import { getBookImageSrc } from "@/utils/getBookImageSrc";
import { notFound, usePathname } from 'next/navigation'
import BookTitle from "./BookTitle";
import BookImage from "./BookImage";
import PublishAt from "./PublishAt";
import BookDescription from "./BookDescription";


export default function CompletedBook(){
    
    const book = useBook();    
    const { title, covers, created, description } = book;
    

    return (
        <>
        <BookTitle>{title}</BookTitle>
        <BookImage covers={covers} />
        <PublishAt date={created.value} />
        <BookDescription>{description}</BookDescription>
        </>
        
    )
}