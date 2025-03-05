import localFont from "next/font/local";
import "./globals.css";

// Load Helvetica Neue fonts
const helveticaMedium = localFont({
  src: "/fonts/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-medium",
  weight: "500",
  style: "normal",
});

const helveticaLight = localFont({
  src: "/fonts/HelveticaNeueLight.otf",
  variable: "--font-helvetica-light",
  weight: "300",
  style: "normal",
});

export const metadata = {
  title: "My Next.js App",
  description: "Using Helvetica Neue everywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${helveticaMedium.variable} ${helveticaLight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
