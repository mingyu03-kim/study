import { ReactNode } from "react";
import Searchbar from "./searchbar";

// layout에는, children이라는 props가 자동으로 전달이 된다.
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}