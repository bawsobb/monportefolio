import React from "react";
import { Column, Flex, Badge, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header de la section Work */}
      <Flex fillWidth direction="column" gap="16" marginBottom="40" paddingX="12">
        <Badge variant="success" size="s" style={{ width: 'fit-content' }}>
          🌍 Remote Expertise | GMT+0
        </Badge>
        <Heading variant="display-strong-s">Études de Cas Techniques</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: '600px' }}>
          Découvrez comment je sécurise et optimise les infrastructures critiques, de la gestion des données nationales de santé à la restructuration complète de backbones réseaux.
        </Text>
      </Flex>

      {/* Liste des projets (incluant tes fichiers .mdx) */}
      <Projects />
    </Column>
  );
}