import { BookInterface, BooksType } from '@/types/types'
import { create } from 'zustand'

interface booksStore {
    books: BooksType
    setBooks: (books: BooksType) => void
}

export const useBooks = create<booksStore>((set) => ({
  books: [],
  setBooks: (books) => set(() => ({ books: books })),
}))