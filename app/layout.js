import { Inter } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";

import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "@/components/NavBar";

// Import Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MannMitra: Your Digital Companion for Mental Clarity",
  description: "One stop mental health Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "dark",
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
          colorText: "#ffffff",
        },
        elements: {
          socialButtonsBlockButton: {
            color: "#ffffff",        // Force white text
            backgroundColor: "#2D3748", // Optional: darker bg for consistency
          },
          socialButtonsBlockButtonText: {
            color: "#ffffff", // Ensures the text inside button stays white
          },
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <Aurora />
          </div>
          <Navbar className="sticky top-0 z-10 w-full" />
          <main className="min-h-screen mt-40">{children}</main>
          <footer className="bg-[#0a0a1f] py-12">
            <div className="mx-auto container text-center px-4 text-gray-600">
              © {new Date().getFullYear()} Aura Points. All rights reserved.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
