
type Size = "S" | "M" | "L"

export function getBookImageSrc(id: number | undefined, size: Size ="M"){
    const imageSrc = id ?
                        `https://covers.openlibrary.org/b/id/${id}-${size}.jpg`
                        :
                        "/No_Image_Available.jpg";
    
    return imageSrc;
}