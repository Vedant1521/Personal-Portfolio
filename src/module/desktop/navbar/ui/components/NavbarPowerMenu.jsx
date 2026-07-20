const NavbarPowerMenu = ({ setIsAppleMenuOpen, setIsAsleep, setIsShuttingDown }) => (
  <div className="apple-menu-section">
    <button
      type="button"
      className="apple-menu-item"
      onClick={() => {
        setIsAppleMenuOpen(false);
        setIsAsleep(true);
      }}
    >
      Sleep
    </button>
    <button
      type="button"
      className="apple-menu-item"
      onClick={() => {
        setIsAppleMenuOpen(false);
        sessionStorage.setItem("isRestartingSystem", "true");
        window.location.reload();
      }}
    >
      Restart...
    </button>
    <button
      type="button"
      className="apple-menu-item"
      onClick={() => {
        setIsAppleMenuOpen(false);
        sessionStorage.setItem("isRestartingSystem", "true");
        sessionStorage.setItem("wasLoggedIn", "false");
        setIsShuttingDown(true);
      }}
    >
      Shut Down...
    </button>
  </div>
);

export default NavbarPowerMenu;
