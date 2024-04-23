import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meet Our Talented Team | OpenArmor Cybersecurity",
  description:
    "Discover the dedicated team behind OpenArmor Cybersecurity, committed to revolutionizing cybersecurity with expertise in eBPF logging, artificial intelligence, and threat detection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
