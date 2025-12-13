"use client";

import { memo, useState } from "react";
import BoldIcon from "@/components/icons/BoldIcon";
import HelpIcon from "@/components/icons/HelpIcon";
import { useTranslations } from "@/hooks/useTranslations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { className } from "./styles";

interface NavLink {
  href: string;
  translationKey: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const NAV_LINKS: NavLink[] = [
  { href: "/test-page", translationKey: "navbar.myBusiness" },
  { href: "/test-page", translationKey: "navbar.help", icon: HelpIcon },
];

function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  const toggleMenu = () => setOpen((prev) => !prev);

  const menuMobileClasses = `${className.menuMobile} ${
    open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
  }`;

  const renderNavLink = (link: NavLink, isMobile = false) => (
    <a
      key={link.translationKey}
      href={link.href}
      className={isMobile ? className.navLinkMobile : className.navLink}
    >
      {t(link.translationKey)}
      {link.icon && <link.icon className={className.icon} />}
    </a>
  );

  return (
    <nav className={className.nav}>
      <div className={className.container}>
        <BoldIcon className={className.logo} />

        <div className={className.menuDesktop}>
          {NAV_LINKS.map((link) => renderNavLink(link))}
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className={className.hamburgerButton}
          aria-label={t("navbar.openMenu")}
        >
          <span
            className={`${className.hamburgerLine} top-2 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`${className.hamburgerLine} top-4 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`${className.hamburgerLine} top-6 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div className={menuMobileClasses}>
        <div className={className.menuMobileContent}>
          {NAV_LINKS.map((link) => renderNavLink(link, true))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
