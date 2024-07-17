import JobRightSidebar from "../components/JobSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start">
      <div className="bg-white rounded-lg p-5 w-10/12">{children}</div>
      <div className="bg-white rounded-lg p-5 w-1/3 mx-5">
        <JobRightSidebar />
      </div>
    </div>
  );
}
