import { ReactNode } from "react";

// layout에는, children이라는 props가 자동으로 전달이 된다.
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>세팅헤더</div>
      {children}
    </div>
  );
}
