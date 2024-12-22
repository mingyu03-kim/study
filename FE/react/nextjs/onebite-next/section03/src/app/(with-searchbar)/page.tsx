// "use client"; // client 컴포넌트로 선언하는 코드.

import ClientComponent from "./client-component";
import styles from "./page.module.css";
import ServerComponent from "./server-component";

export default function Home() {
  // console.log("Home 컴포넌트 실행");

  // 브라우저에서만 동작하기 때문에, 해당 훅 사용 불가.
  // useEffect(() => {});

  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
