import MainNav from "components/components/ui/layouts/nav/MainNav";
import "../styles/globals.css";
import UiMainLayout from "components/components/ui/layouts/layout/UiMainLayout";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:!text-white transition-all text-black bg-white selection:bg-orange-500">
        <UiMainLayout>{children}</UiMainLayout>
      </body>
    </html>
  );
}
