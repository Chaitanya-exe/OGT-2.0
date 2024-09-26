// import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider"

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ogt2.0",
  description: "Get&Post Projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgColor text-blac relative">
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
