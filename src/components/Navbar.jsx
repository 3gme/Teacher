import { useState } from "react";
import MainNavMenu from "./MainNavMenu";
import MainNavMobileMenu from "./MainNavMobileMenu";
import useGetUser from "../features/auth/useGetUser";
// import { useGetUser } from "../features/auth/useGetUser";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useGetUser();

  const userRole = user?.roles[0] || "guest";

  const handleCloseMenu = () => setIsMenuOpen(false);
  const isLogin = !!user;
  const isAdmin = userRole === "Admin";

  return (
    <header className="sticky top-0 z-30 border-b border-primary-800 bg-primary text-primary-foreground shadow-md">
      {/* Navigation */}
      <MainNavMenu
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        isLogin={isLogin}
        setIsMenuOpen={setIsMenuOpen}
        isAdmin={isAdmin}
      />

      {/* Mobile menu content */}
      <MainNavMobileMenu
        handleCloseMenu={handleCloseMenu}
        isLogin={isLogin}
        isMenuOpen={isMenuOpen}
        isAdmin={isAdmin}
      />
    </header>
  );
}

export default Navbar;
