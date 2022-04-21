import React, { FC } from "react";
import Link from "next/link";

const TheNavbar: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom mb-4">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Русская Леди</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={showMobileMenu}
          aria-label="Toggle navigation"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarNavAltMarkup"
          className={`collapse navbar-collapse ${showMobileMenu ? "show" : ""}`}
        >
          <div className="navbar-nav ms-auto">
            <Link aria-current="page" href="/shipping-and-payment">
              <a className="nav-link">Доставка и Оплата</a>
            </Link>
            <Link href="/size-chart">
              <a className="nav-link">Таблица размеров</a>
            </Link>
            <Link href="/contacts">
              <a className="nav-link">Контакты</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
