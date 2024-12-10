import SearchableLayout from '@/components/searchable';
import { ReactNode, useEffect } from 'react';
import style from './index.module.css';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

// Next에서 사용하는 메서드. SSR로 인식됨
export const getServerSideProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(), fetchRandomBooks(),
  ])

  return { // 반드시 객체를 반환해야 하며,
    props: { // 반드시 props를 반환해야 한다.
      allBooks,
      recoBooks
    }
  }
};

export default function Home({allBooks, recoBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;