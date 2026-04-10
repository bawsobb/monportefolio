import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { Schema, Meta } from "@/once-ui/modules";
import { cookies } from "next/headers";
import { person as personEn, about as aboutEn, social as socialEn } from "@/app/resources/content-en";
import { person as personFr, about as aboutFr, social as socialFr } from "@/app/resources/content-fr";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";
  const content = locale === "en" ? aboutEn : aboutFr;

  return Meta.generate({
    title: content.title,
    description: content.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(content.title)}`,
    path: content.path,
  });
}

export default async function About() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as "en" | "fr") || "fr";
  const t = locale === "en" 
    ? { person: personEn, about: aboutEn, social: socialEn, locale: 'en' } 
    : { person: personFr, about: aboutFr, social: socialFr, locale: 'fr' };

  const structure = [
    {
      title: t.about.intro.title,
      display: t.about.intro.display,
      items: [],
    },
    {
      title: t.about.work.title,
      display: t.about.work.display,
      items: t.about.work.experiences.map((experience: any) => experience.company),
    },
    {
      title: t.about.studies.title,
      display: t.about.studies.display,
      items: t.about.studies.institutions.map((institution: any) => institution.name),
    },
    {
      title: t.about.technical.title,
      display: t.about.technical.display,
      items: t.about.technical.skills.map((skill: any) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={t.about.title}
        description={t.about.description}
        path={t.about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(t.about.title)}`}
        author={{
          name: t.person.name,
          url: `${baseURL}${t.about.path}`,
          image: `${baseURL}${t.person.avatar}`,
        }}
      />
      {t.about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={t.about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {t.about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={t.person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {t.person.location}
            </Flex>
            {t.person.languages.length > 0 && (
              <Flex wrap gap="8">
                {t.person.languages.map((language: string) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={t.about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {t.about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">{t.locale === 'fr' ? 'Prendre rendez-vous' : 'Schedule a call'}</Flex>
                <IconButton
                  href={t.about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {t.person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {t.person.role}
            </Text>
            {t.social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {t.social.map(
                  (item: any) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {t.about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {t.about.intro.description}
            </Column>
          )}

          {t.about.work.display && (
            <>
              <Heading as="h2" id={t.about.work.title} variant="display-strong-s" marginBottom="m">
                {t.about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {t.about.work.experiences.map((experience: any, index: number) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: any, idx: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${idx}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {t.about.studies.display && (
            <>
              <Heading as="h2" id={t.about.studies.title} variant="display-strong-s" marginBottom="m">
                {t.about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {t.about.studies.institutions.map((institution: any, index: number) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

{t.about.technical.display && (
  <>
    <Heading
      as="h2"
      id={t.about.technical.title}
      variant="display-strong-s"
      marginBottom="40"
    >
      {t.about.technical.title}
    </Heading>
    <Column fillWidth gap="xl">
{t.about.technical.skills.map((skill: any, index: number) => (
  <Column key={`${skill.title}-${index}`} fillWidth gap="16">
    <Text variant="heading-strong-l">{skill.title}</Text>
    <Text variant="body-default-m" onBackground="neutral-weak">
      {skill.description}
    </Text>
    
    <Flex wrap="wrap" gap="8">
      {skill.badges?.map((badge: string, i: number) => (
        <Tag key={i} variant="neutral" size="m">
          {badge}
        </Tag>
      ))}
    </Flex>
  </Column>
))}
    </Column>
  </>
)}
        </Column>
      </Flex>
    </Column>
  );
}
