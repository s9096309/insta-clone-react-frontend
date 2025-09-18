import { Outlet, NavLink } from "react-router";

export default function ProfileLayout() {
  const activeLinkStyle = {
    borderBottom: "1px solid #333",
    color: "#333",
    fontWeight: 600,
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="border-b border-gray-300">
        <nav className="flex justify-center gap-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <NavLink
            to="/profile/posts/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="py-4"
          >
            Posts
          </NavLink>
          <NavLink
            to="/profile/reels/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="py-4"
          >
            Reels
          </NavLink>
          <NavLink
            to="/profile/tagged/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="py-4"
          >
            Tagged
          </NavLink>
          <NavLink
            to="/profile/highlights"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            className="py-4"
          >
            Highlights
          </NavLink>
        </nav>
      </div>

      <main>
        {/* This Outlet is the placeholder where your grid pages will appear */}
        <Outlet />
      </main>
    </div>
  );
}