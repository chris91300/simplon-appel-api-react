import BooksHandler from "@/components/books/BooksHandler";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black">
        <h1 className="uppercase">stephen king</h1>
        <BooksHandler />
      </main>
    </div>
  );
}
