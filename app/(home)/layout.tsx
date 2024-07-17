import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="w-1/4 mx-5">
        <Sidebar />
      </div>
      <div className="w-11/12 my-5">{children}</div>
    </div>
  );
}
