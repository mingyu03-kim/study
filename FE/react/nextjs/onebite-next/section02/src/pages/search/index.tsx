import SearchableLayout from "@/components/searchable";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { useRouter } from "next/router";
import { BookData } from "../../../types";

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     const q = context.query.q;
//     const books = await fetchBooks(q as string);
//     return {
//         props: {
//             books
//         },
//     }
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//     // staticProps의 context에는 query가 없다. 
//     // build 할때 실행되기 때문에, query가 있는지 없는지를 판단할 수 없다.
//     // ==> 검색결과의 query가 필요하다 ? SSG 방식이 어울리지 않아서, SSR을 권장한다.

//     const q = context.query.q;
//     const books = await fetchBooks(q as string);
//     return {
//         props: {
//             books
//         },
//     }
// }

export default function Page() {
    const [books, setBooks] = useState<BookData[]>([]);
    const router = useRouter();
    const q = router.query.q;

    const fetchSearchResult = async () => {
        const data = await fetchBooks(q as string);
        setBooks(data);
    }

    useEffect(() => {
        if (q) fetchSearchResult();
    }, [q]);

    return <div>
        {books.map((book) => <BookItem key={book.id} {...book} />)}
    </div>;
}

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
}