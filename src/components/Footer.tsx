"use client";

import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import styles from "./Footer.module.scss";
import { useTranslation } from "@/context/LanguageContext";
import { shop } from "@/app/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{t.person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Crédit exigé par la licence CC BY-NC 4.0 du modèle d'origine (voir LICENSE) : ne pas supprimer. */}
            / {t.locale === "fr" ? "Adapté de" : "Adapted from"}{" "}
            <SmartLink href="https://once-ui.com/templates/magic-portfolio">Magic Portfolio</SmartLink>{" "}
            (
            <SmartLink href="https://creativecommons.org/licenses/by-nc/4.0/deed.fr">CC BY-NC 4.0</SmartLink>
            )
          </Text>
        </Text>
        <Flex gap="16">
          <IconButton
            href={shop.url}
            icon="shop"
            tooltip={t.locale === "fr" ? "Boutique" : "Shop"}
            size="s"
            variant="ghost"
          />
          {t.social.map(
            (item: any) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
