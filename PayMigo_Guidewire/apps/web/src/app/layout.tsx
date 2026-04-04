import "../index.css";
import React from "react";

export const metadata = {
  title: "PayMigo",
  description: "Parametric Insurance for Gig Workers powered by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
