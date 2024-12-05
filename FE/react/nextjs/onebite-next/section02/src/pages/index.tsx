import SearchableLayout from '@/components/searchable';
import { ReactNode } from 'react';
import style from './index.module.css';

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => <SearchableLayout>{page}</SearchableLayout>;