import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { Mailchimp } from "@/components";
import { Meta, Schema } from "@/once-ui/modules";
import { cookies } from "next/headers";
import { person as personEn, home as homeEn, about as aboutEn, newsletter as newsletterEn } from "@/app/resources/content-en";
import { person as personFr, home as homeFr, about as aboutFr, newsletter as newsletterFr } from "@/app/resources/content-fr";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";
  const content = locale === "en" ? homeEn : homeFr;

  return Meta.generate({
    title: content.title,
    description: content.description,
    baseURL: baseURL,
    path: content.path,
  });
}

export default async function Home() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as "en" | "fr") || "fr";
  const t = locale === "en" 
    ? { person: personEn, home: homeEn, about: aboutEn, newsletter: newsletterEn } 
    : { person: personFr, home: homeFr, about: aboutFr, newsletter: newsletterFr };

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={t.home.path}
        title={t.home.title}
        description={t.home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(t.home.title)}`}
        author={{
          name: t.person.name,
          url: `${baseURL}${t.about.path}`,
          image: `${baseURL}${t.person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
        {/* Ajout des badges de fiabilité */}
        <Flex gap="8" marginBottom="16" wrap="wrap">
          <Badge variant="success" size="s">☀️ {locale === 'fr' ? '100% Solaire' : '100% Solar Powered'}</Badge>
          <Badge variant="info" size="s">🌐 {locale === 'fr' ? 'Fibre + 4G Failover' : 'Fiber + 4G Failover'}</Badge>
          <Badge variant="neutral" size="s">🌍 GMT+0 (Remote)</Badge>
        </Flex>
          {t.home.featured && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={t.home.featured.href}>
              <Row paddingY="2">{t.home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {t.home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {t.home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={t.about.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {t.about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={t.person.avatar}
                    size="m"
                  />
                )}
                {t.about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {t.newsletter.display && <Mailchimp newsletter={t.newsletter} />}
    </Column>
  );
}
