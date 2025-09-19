import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import "./app.css";

export function links() {
  return [{ rel: "stylesheet", href: "/app.css" }];
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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