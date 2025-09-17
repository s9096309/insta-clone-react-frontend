import { Outlet, NavLink } from "react-router";

export default function ProfileLayout() {
  const activeLinkStyle = {
    borderBottom: "1px solid black",
    fontWeight: 600,
  };

  return (
    <div>
      <div className="border-b border-gray-300">
        <nav className="flex justify-center gap-16 text-sm text-gray-500">
          <NavLink
            to="/profile/posts/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            POSTS
          </NavLink>
          <NavLink
            to="/profile/reels/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            REELS
          </NavLink>
          <NavLink
            to="/profile/tagged/grid"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            TAGGED
          </NavLink>
          {/* Add the new NavLink for Highlights */}
          <NavLink
            to="/profile/highlights"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            HIGHLIGHTS
          </NavLink>
        </nav>
      </div>

      <main>
        {/* The content for each page renders here */}
        <Outlet />
      </main>
    </div>
  );
}