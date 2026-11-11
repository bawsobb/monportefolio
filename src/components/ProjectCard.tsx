"use client";

import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/once-ui/components";
import { useTranslation } from "@/context/LanguageContext";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  image?: string;
  title: string;
  description: string;
  publishedAt?: string;
  tech?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority,
  image,
  title,
  description,
  publishedAt,
  tech = [],
}) => {
  const { locale } = useTranslation();
  const year = publishedAt ? new Date(publishedAt).getFullYear() : null;

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.cover}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 480px"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span>{tech[0] ?? title}</span>
          </div>
        )}
        {year && <span className={styles.year}>{year}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description?.trim() && <p className={styles.description}>{description}</p>}
        {tech.length > 0 && (
          <ul className={styles.tech}>
            {tech.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
            {tech.length > 4 && <li>+{tech.length - 4}</li>}
          </ul>
        )}
        <span className={styles.more}>
          {locale === "fr" ? "Lire l'étude de cas" : "Read case study"}
          <Icon name="arrowRight" size="xs" />
        </span>
      </div>
    </Link>
  );
};
