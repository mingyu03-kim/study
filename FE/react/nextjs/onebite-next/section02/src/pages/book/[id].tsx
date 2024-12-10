import fetchOneBook from '@/lib/fetch-one-book';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import style from './[id].module.css'
// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     const id = context.params?.id;
//     const book = await fetchOneBook(Number(id));
//     return {
//         props: {
//             book
//         },
//     }
// }
export const getStaticPaths = () => {
    return {
        paths: [
            {params: {id: '1'}}, // url parameter는 반드시 string으로만.
            {params: {id: '2'}},
            {params: {id: '3'}},
        ],
        fallback: false, // false일 경우, 생성해놓지 않은 path로 요청이 들어오면 404페이지 반환.
    }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params?.id;
    const book = await fetchOneBook(Number(id));
    return {
        props: {
            book
        },
    }
}


export default function Page({book}:InferGetStaticPropsType<typeof getStaticProps>) {
    if (!book) return '문제발생';
    const {title, subTitle, description, author, publisher, coverImgUrl} = book;
    return <div className={style.container}>
        <div 
            className={style.cover_img_container}
            style={{backgroundImage: `url('${coverImgUrl}')`}}
        >
            <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>{author} | {publisher}</div>
        <div className={style.description}>{description}</div>
    </div>;
}