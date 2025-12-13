"use client";

import { memo, useState } from "react";
import BoldIcon from "@/components/icons/BoldIcon";
import HelpIcon from "@/components/icons/HelpIcon";
import { useTranslations } from "@/hooks/useTranslations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <nav className="w-full bg-bold-gradient">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16">
        <BoldIcon className="w-24 md:w-28 h-auto text-white" />

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/test-page"
            className="text-sm font-medium text-white/90 hover:text-white transition"
          >
            {t("navbar.myBusiness")}
          </a>
          <a
            href="/test-page"
            className="text-sm font-medium text-white/90 hover:text-white transition flex items-center gap-2"
          >
            {t("navbar.help")}
            <HelpIcon className="w-5 h-5 text-white" />
          </a>
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="relative h-8 w-8 md:hidden text-white"
          aria-label={t("navbar.openMenu")}
        >
          <span
            className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-full bg-white transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-6 h-0.5 w-full bg-white transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <a href="/test-page" className="block py-2 text-white">
            {t("navbar.myBusiness")}
          </a>
          <a href="/test-page" className="block py-2 text-white">
            {t("navbar.help")}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
