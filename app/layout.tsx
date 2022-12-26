"use client";
import "./globals.css";
import ReactQueryWrapper from "@/components/ReactQueryWrapper";
import { Toaster } from "@/ui/toast";
import LoginModal from "@/ui/modal/loginModal";
import ReduxProvider from "@/lib/redux/reduxProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryWrapper>
          <ReduxProvider>
            {/* <LoginModal /> */}
            {children}
          </ReduxProvider>
        </ReactQueryWrapper>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
