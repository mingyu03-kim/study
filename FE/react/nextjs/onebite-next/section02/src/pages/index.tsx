import SearchableLayout from '@/components/searchable';
import { ReactNode } from 'react';
import style from './index.module.css';
import BookItem from '@/components/book-item';
import { InferGetStaticPropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';
import Head from 'next/head';

// // Next에서 사용하는 메서드. SSR로 인식됨
// export const getServerSideProps = async () => {
//   const [allBooks, recoBooks] = await Promise.all([
//     fetchBooks(), fetchRandomBooks(),
//   ])

//   return { // 반드시 객체를 반환해야 하며,
//     props: { // 반드시 props를 반환해야 한다.
//       allBooks,
//       recoBooks
//     }
//   }
// };

// Next에서 사용하는 메서드. SSG로 인식됨
export const getStaticProps = async () => {
  // 개발 모드에서는 계속 사전 렌더링을 한다. 
  // 그러므로 개발 모드에서는 SSR이랑 비슷하게 동작함.
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(), fetchRandomBooks(),
  ])

  return { // 반드시 객체를 반환해야 하며,
    props: { // 반드시 props를 반환해야 한다.
      allBooks,
      recoBooks
    },
    // revalidate: 3, // ISR 사용을 위한 property. 3초 주기로 재검증
  }
};

export default function Home({allBooks, recoBooks}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
    <Head>
      {/* 메타 태그 작성할 수 있다. */}
      <title>한입북스</title>
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:title" content="도서관" />
      <meta property="og:description" content="도서관에 있는 책들" />
    </Head>
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
    </>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;