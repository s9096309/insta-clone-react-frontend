import { Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import "./app.css"; // <-- Import the CSS file directly here

// We are removing the 'links' export as it conflicts with the dev server
// export function links() { ... }

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {/* React Router will handle the <link> tag for you when you import the css */}
      </head>
      <body className="bg-gray-50">
        <Header />
        <div className="pt-16 pb-16">
          <Outlet />
        </div>
        <BottomNav />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}