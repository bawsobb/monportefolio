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
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / {t.locale === 'fr' ? 'Créez votre portfolio avec' : 'Build your portfolio with'}{" "}
            <SmartLink
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
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
