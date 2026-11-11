"use client";

import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  sections: string[];
  label: string;
}

/** Sommaire de la page : surligne la section en cours de lecture. */
const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, label }) => {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 96,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <nav className={styles.toc} aria-label={label}>
      {sections.map((section) => (
        <button
          key={section}
          type="button"
          className={styles.tocItem}
          aria-current={active === section ? "true" : undefined}
          onClick={() => scrollTo(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default TableOfContents;
