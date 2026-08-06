import type { Metadata } from "next";
import "./globals.css";
import { DemoProvider } from "@/components/demo-provider";

export const metadata: Metadata = {
  title: { default: "Home Saver", template: "%s | Home Saver" },
  description: "A smarter path to your first Australian home.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className="h-full antialiased"
    >
      <body className="min-h-full"><DemoProvider>{children}</DemoProvider></body>
    </html>
  );
}
