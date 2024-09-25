<<<<<<< HEAD
// import { Inter } from "next/font/google";
import "@/style/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
=======
import { Inter } from "next/font/google";
import Provider from "@/components/Provider"
import "./globals.css";
>>>>>>> 43640c4393539b0396f27a003596995617b29e67

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ogt2.0",
  description: "Get&Post Projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="bg-bgColor text-blac relative">
      <Header/>
      {children}
      <Footer/>

=======
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
>>>>>>> 43640c4393539b0396f27a003596995617b29e67
      </body>
    </html>
  );
}
