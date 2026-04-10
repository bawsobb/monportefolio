import React from "react";
import { Column, Flex, Badge, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { Schema, Meta } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { cookies } from "next/headers";
import { person as personEn, work as workEn, about as aboutEn } from "@/app/resources/content-en";
import { person as personFr, work as workFr, about as aboutFr } from "@/app/resources/content-fr";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";
  const content = locale === "en" ? workEn : workFr;

  return Meta.generate({
    title: content.title,
    description: content.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(content.title)}`,
    path: content.path,
  });
}

export default async function Work() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as "en" | "fr") || "fr";
  const t = locale === "en" 
    ? { person: personEn, work: workEn, about: aboutEn } 
    : { person: personFr, work: workFr, about: aboutFr };

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={t.work.path}
        title={t.work.title}
        description={t.work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(t.work.title)}`}
        author={{
          name: t.person.name,
          url: `${baseURL}${t.about.path}`,
          image: `${baseURL}${t.person.avatar}`,
        }}
      />
      
      {/* Header de la section Work */}
      <Flex fillWidth direction="column" gap="16" marginBottom="40" paddingX="12">
        <Badge variant="success" size="s" style={{ width: 'fit-content' }}>
          {locale === 'fr' ? '🌍 Expertise Remote | GMT+0' : '🌍 Remote Expertise | GMT+0'}
        </Badge>
        <Heading variant="display-strong-s">{locale === 'fr' ? 'Études de Cas Techniques' : 'Technical Case Studies'}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: '600px' }}>
          {locale === 'fr' 
            ? 'Découvrez comment je sécurise et optimise les infrastructures critiques, de la gestion des données nationales de santé à la restructuration complète de backbones réseaux.'
            : 'Discover how I secure and optimize critical infrastructures, from managing national health data to completely restructuring network backbones.'}
        </Text>
      </Flex>

      {/* Liste des projets (incluant tes fichiers .mdx) */}
      <Projects />
    </Column>
  );
}