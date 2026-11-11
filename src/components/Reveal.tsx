"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Reveal.module.scss";

interface RevealProps {
  children: React.ReactNode;
  /** Décalage en ms, pour échelonner les éléments d'une même rangée */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}

/**
 * Fait apparaître son contenu quand il entre dans le viewport.
 * Le contenu reste visible sans JavaScript : il n'est masqué qu'une fois
 * le composant monté, et seulement s'il se trouve sous la ligne de flottaison.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    Tag,
    {
      ref,
      className: [styles.reveal, className].filter(Boolean).join(" "),
      style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties,
    },
    children,
  );
}
