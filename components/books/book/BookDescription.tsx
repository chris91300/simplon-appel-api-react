

type Props = {
    children: {
        type: string,
        value: string
    } | undefined
}

export default function BookDescription({ children }: Props){

    const description = children ? children.value : "pas de description";
    return (
        <>
        <h2 className="text-xl font-bold text-center mt-8 mb-4">Description</h2>

        <p>{ description }</p>
        </>
    )
}