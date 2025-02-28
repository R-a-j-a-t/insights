import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Insights App",
  description: "Get insights about npm packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-2xl bg-blue-300 mx-auto">{children}</body>
    </html>
  );
}
