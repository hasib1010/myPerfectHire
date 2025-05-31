import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

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

// ✅ SEO metadata (without viewport)
export const metadata = {
  title: "MyPerfectHire - Hire Top Talent Effortlessly",
  description:
    "Discover MyPerfectHire, your go-to platform for finding and hiring top talent quickly and efficiently. Streamline your recruitment process today!",
  keywords:
    "hiring, recruitment, top talent, job platform, MyPerfectHire, employment, staffing solutions",
  openGraph: {
    title: "MyPerfectHire - Hire Top Talent Effortlessly",
    description:
      "Streamline your hiring process with MyPerfectHire. Find the perfect candidates for your business today!",
    url: "https://www.myperfecthire.com",
    siteName: "MyPerfectHire",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.myperfecthire.com/logo.png",
        width: 1200,
        height: 630,
        alt: "MyPerfectHire - Recruitment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPerfectHire - Hire Top Talent Effortlessly",
    description:
      "Find and hire the best candidates with MyPerfectHire. Simplify recruitment now!",
    image: "https://www.myperfecthire.com/logo.png",
  },
  robots: "index, follow",
};

// ✅ Move viewport here as a separate export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaMedium.variable} ${helveticaLight.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
