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
      <body>
        <ReactQueryWrapper>
          <ReduxProvider>{children}</ReduxProvider>
        </ReactQueryWrapper>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
