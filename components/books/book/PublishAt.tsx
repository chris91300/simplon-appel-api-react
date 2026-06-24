
type Props = {
    date: string
}

export default function PublishAt({ date }: Props){
    const publishDate = new Date(date);
    const publishedAt = publishDate.toLocaleDateString();

    return <p>publié le : {publishedAt}</p>
}