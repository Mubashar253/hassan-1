import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Malik Mubashar Hassan | VIP Portfolio",
  description: "Official international portfolio of Malik Mubashar Hassan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
