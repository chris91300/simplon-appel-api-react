
import CompletedBook from '@/components/books/book/CompletedBook';
import Link from 'next/link';

 
export default function Page() {
  
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black">
            <Link href="/" className='px-4 py-2 font-bold absolute top-3 left-3'>retour</Link>
            <CompletedBook />
        </main>
    </div>
    
    </>
  
  )
}