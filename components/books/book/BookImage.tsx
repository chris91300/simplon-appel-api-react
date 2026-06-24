import { getBookImageSrc } from "@/utils/getBookImageSrc";

type Props = {
    covers: number[] | undefined
}

export default function BookImage({ covers }: Props){

    const id = covers ? covers[0]: undefined;
    const imageSrc = getBookImageSrc(id, "L");

    return (
        <img src={imageSrc} />
    )
}