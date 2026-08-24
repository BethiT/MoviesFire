import { useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="Logo" />
        {/* navigation link */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/TV Shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="/Movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/New & Popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/My Lists">
            My Lists
          </Link>
          <Link className={styles.navLink} to="/Browse by Language">
            Browse by Language
          </Link>
        </nav>
        {/* right side section */}
        <div className={styles.rightSide}>
          {/* search  */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
                autoFocus
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>4</span>
          </button>
          {/* user profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* user profile button */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileDropdown}>
                <Link to="/account" className={styles.dropdownLink}>
                  Account
                </Link>
                <Link to="/help" className={styles.dropdownLink}>
                  Help Center
                </Link>
                <hr className={styles.profileMenuDivider}/>
                <button className={styles.signoutButton}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
