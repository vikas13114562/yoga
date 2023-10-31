import Carousel from "./component/carousel/Carousel";
import Footer from "./component/footer/Footer";
import Insta from "./component/instagram/Insta";
import Navbar from "./component/nav/navbar";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Inter, Josefin_Sans } from "next/font/google";
import Loader from "./loading";
import { Suspense } from "react";
import Whatsapp from "./component/utils/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

const josefin = Josefin_Sans({
  weight: ["400", "700", "600", "200"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sarvyog",
  description: "Yoga Classes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <NextTopLoader
          color="#E5D283"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Carousel />

          {children}

          <Insta />
          <Footer />
        </Suspense>
        <Whatsapp />
      </body>
    </html>
  );
}
