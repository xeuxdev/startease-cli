import { Footer, Header } from "@/containers/common";

export default function Template({ children, showHeader, showFooter }) {
  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
