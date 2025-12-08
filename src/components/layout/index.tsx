import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import type {ReactNode} from "react";

function Layout({children}: Props) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout

interface Props {
  children: ReactNode;
}