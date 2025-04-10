import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth";
import Footer from "@/components/header/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "jobkityaari",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" sizes="16x16" />
        <meta name="robots" content="noindex, nofollow"></meta>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9QH53NLWK"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P9QH53NLWK');
          `
        }} /> */}




        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B6KBQKWQMS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B6KBQKWQMS');
          `,
          }}
        />




      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
