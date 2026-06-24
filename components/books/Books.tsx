
import { SmallBook } from "./book/SmallBook"
import { useBooks } from "@/store/useBooks";


export function Books(){
    const {books} = useBooks()
    const booksList = books.map((book, index) => <SmallBook book={book} key={book.title + index} index={index} />);

    return(
        <div className="flex flex-wrap justify-around w-full">
            {booksList}
        </div>
    )
}