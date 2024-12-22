import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import style from "./page.module.css";

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  );

  if (!response.ok) return <div>오류,,,</div>;

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
      ;
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`
  );

  if (!response.ok) return <div>오류,,,</div>;

  const recoBooks: BookData[] = await response.json();

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
      ;
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {/* @ts-expect-error Server Component */}
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {/* @ts-expect-error Server Component */}
        <AllBooks />
      </section>
    </div>
  );
}
