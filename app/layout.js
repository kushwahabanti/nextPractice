import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

// export const metadata = {
//   title: "TechStore | Online Shopping",
//   description: "Explore and purchase quality electronic products.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        

        <main className="flex-grow">
          {children}
        </main>

        
      </body>
    </html>
  );
}