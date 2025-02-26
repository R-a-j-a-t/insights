import "./globals.css";

export const metadata = {
  title: "Insights App",
  description: "Get insights about npm packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
