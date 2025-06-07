import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HireNowModalProvider } from "@/context/HireNowModalContext";
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HireNowModalProvider>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </HireNowModalProvider>
  );
}
