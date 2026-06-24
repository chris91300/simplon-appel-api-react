
export interface openLibraryResponse{
    links: any,
    size: number,
    entries: BooksType
}



export interface BookInterface{
    title: string,
    key: string,
    authors: any[],
    type: any[],
    subjects: any[],
    description: {type: string, value: string},
    subtitle: string,
    covers: any[],
    latest_revision: number,
    revision: number,
    created: {
        type: string,
        value: string
    },
    last_modified: Object
}

export type BooksType = BookInterface[];