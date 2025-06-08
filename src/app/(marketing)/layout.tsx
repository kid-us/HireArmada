import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HireNowModalProvider } from "@/context/HireNowModalContext";
import SmoothScroll from "../../components/SmoothScroll";
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HireNowModalProvider>
      <main>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </main>
    </HireNowModalProvider>
  );
}
