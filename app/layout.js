
import Provider from "@/components/Provider";
import ClientLayout from "./ClientLayout";
import "../styles/globals.css"

export const metadata = {
  title: "OGT - Expert Remote Services | Simplify Your Business Operations at competetive prices",
  description: "OGT offers expert remote services to streamline your business operations. whether a small, medium or enterprise business, we deliver tailored solutions to save you time and ensure seamless growth.",
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
