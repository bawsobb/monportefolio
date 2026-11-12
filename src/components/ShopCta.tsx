"use client";

import { Button } from "@/once-ui/components";
import { shop } from "@/app/resources";
import { useTranslation } from "@/context/LanguageContext";
import styles from "./ShopCta.module.scss";

interface ShopCtaProps {
  /** Clé d'un produit de `shop.products` ; sans produit, l'encart propose un contact. */
  product?: string;
}

/**
 * Encart affiché en fin d'article ou d'étude de cas.
 * Le titre n'est pas un <h2> pour ne pas apparaître dans le sommaire « On this page ».
 */
export function ShopCta({ product }: ShopCtaProps) {
  const { locale, t } = useTranslation();
  const fr = locale === "fr";
  const item = product ? shop.products[product as keyof typeof shop.products] : undefined;

  if (item) {
    const copy = item[locale];
    return (
      <aside className={styles.cta}>
        <span className={styles.eyebrow}>{fr ? "Pour aller plus loin" : "Go further"}</span>
        <p className={styles.title}>{copy.title}</p>
        <p>{copy.text}</p>
        <div className={styles.actions}>
          <Button href={item.url} variant="primary" size="m" suffixIcon="arrowUpRight" data-border="rounded">
            {copy.cta}
          </Button>
          <Button href={`mailto:${t.person.email}`} variant="secondary" size="m" prefixIcon="email" data-border="rounded">
            {fr ? "Une question ?" : "A question?"}
          </Button>
        </div>
      </aside>
    );
  }

  return (
    <aside className={styles.cta}>
      <span className={styles.eyebrow}>{fr ? "Besoin similaire ?" : "Similar need?"}</span>
      <p className={styles.title}>{fr ? "Mettons cela en place chez vous" : "Let's set this up for you"}</p>
      <p>
        {fr
          ? "Audit, déploiement ou accompagnement : décrivez votre contexte et je reviens vers vous."
          : "Audit, deployment or support: describe your context and I'll get back to you."}
      </p>
      <div className={styles.actions}>
        <Button href={`mailto:${t.person.email}`} variant="primary" size="m" prefixIcon="email" data-border="rounded">
          {fr ? "Me contacter" : "Contact me"}
        </Button>
        <Button href={shop.url} variant="secondary" size="m" prefixIcon="shop" data-border="rounded">
          {fr ? "Voir la boutique" : "Visit the shop"}
        </Button>
      </div>
    </aside>
  );
}
