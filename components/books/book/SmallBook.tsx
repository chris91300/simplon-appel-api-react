import { BookInterface } from "@/types/types"
import { getBookImageSrc } from "@/utils/getBookImageSrc";
import Link from "next/link";

type Props = {
    book: BookInterface,
    index: number
}

export function SmallBook({ book, index }: Props){
    console.log(book)
    const { title, description, covers } = book; 
    const id = covers ? covers[0]: undefined;   
    const imageSrc = getBookImageSrc(id);
            
    const textDescription = description?.value || "pas de description"
   
    const href = `/livre/${index}`;
   
    return(
        <article className=" flex flex-col gap-4 w-1/3 border border-black p-4">
            <h2 className="text-center h-10">{ title }</h2>
            <div className="flex justify-center items-center h-80 w-full">
                <img src={imageSrc} alt={title} />
            </div>
            <p className="max-h-40 w-full grow overflow-hidden text-ellipsis text-xs">{textDescription}</p>
            <Link href={href} className="text-center">en savoir plus ...</Link>
        </article>
    )
}