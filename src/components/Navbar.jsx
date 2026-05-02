import { useState } from "react";
import MainNavMenu from "./MainNavMenu";
import MainNavMobileMenu from "./MainNavMobileMenu";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // TODO: Replace with actual auth state
  const user = useSelector((state) => state.user);
  const isLogin = !user ? true : false; // Assuming user is null when not logged in

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-primary-800 bg-primary text-primary-foreground shadow-md">
      {/* Navigation */}
      <MainNavMenu
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        isLogin={isLogin}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Mobile menu content */}
      <MainNavMobileMenu
        handleCloseMenu={handleCloseMenu}
        isLogin={isLogin}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
}

export default Navbar;
