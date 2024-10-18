
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import ClientLayout from "./ClientLayout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get work done in your time",
  description: "Get&Post Projects.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Provider>
        <body className="bg-bgColor min-h-screen flex flex-col relative">
         <ClientLayout >
          {children}
         </ClientLayout>
        </body>
      </Provider>
    </html>
  );
}
