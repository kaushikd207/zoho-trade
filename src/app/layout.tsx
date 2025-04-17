export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f9f9f9] text-sm font-sans text-gray-800">
        {children}
      </body>
    </html>
  );
}
