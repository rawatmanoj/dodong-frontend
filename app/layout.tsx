import "./globals.css";
import ReactQueryWrapper from "@/components/ReactQueryWrapper";
import { Toaster } from "@/ui/toast";
import ReduxProvider from "@/lib/redux/reduxProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ReactQueryWrapper>
          <ReduxProvider>{children}</ReduxProvider>
        </ReactQueryWrapper>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
