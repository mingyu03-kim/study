import SearchableLayout from '@/components/searchable';
import { ReactNode, useEffect } from 'react';
import style from './index.module.css';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';

// Next에서 사용하는 메서드. SSR로 인식됨
export const getServerSideProps = () => {
  // component보다 먼저 실행된다.
  const data = "hello";

  console.log('이건 서버에서 실행되기 때문에 브라우저 콘솔에 찍히지 않는다.', data);
  // window.location 같은, 브라우저 값을 이용하지 못함.
  return { // 반드시 객체를 반환해야 하며,
    props: { // 반드시 props를 반환해야 한다.
      data,
    }
  }
};

export default function Home({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // 이제는 SSR방식이기 때문에, 서버에서도 이 컴포넌트가 한번 실행된다. 
  // 그래서 그냥 사용하면 서버에서 에러가 발생.
  // window.location 
  // 따라서 mounted 됐을 때 사용하는 방식으로 해야 함.
  useEffect(() => {
    console.log(window);
  }, []);

  console.log('???', data);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;