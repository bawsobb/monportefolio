import { Avatar, Button, Icon } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { Reveal } from "@/components/Reveal";
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
  const t =
    locale === "en"
      ? { person: personEn, about: aboutEn, social: socialEn }
      : { person: personFr, about: aboutFr, social: socialFr };
  const { person, about, social } = t;

  const sections = [about.intro, about.work, about.studies, about.technical]
    .filter((section) => section.display)
    .map((section) => section.title);

  return (
    <div className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Colonne latérale : identité + sommaire */}
      <aside className={styles.sidebar}>
        <div className={styles.identity}>
          {about.avatar.display && <Avatar src={person.avatar} size="xl" />}
          <ul className={styles.facts}>
            <li>
              <Icon name="globe" size="xs" />
              {person.locationLabel}
            </li>
            {person.languages.length > 0 && (
              <li>
                <Icon name="person" size="xs" />
                {person.languages.join(" · ")}
              </li>
            )}
          </ul>
        </div>
        {about.tableOfContent.display && (
          <TableOfContents
            sections={sections}
            label={locale === "fr" ? "Sommaire" : "Contents"}
          />
        )}
      </aside>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1>{person.name}</h1>
          <p className={styles.role}>{person.role}</p>
          <div className={styles.links}>
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="secondary"
                    data-border="rounded"
                  />
                ),
            )}
            {about.calendar.display && (
              <Button
                href={about.calendar.link}
                prefixIcon="calendar"
                label={locale === "fr" ? "Prendre rendez-vous" : "Schedule a call"}
                size="s"
                variant="primary"
                data-border="rounded"
              />
            )}
          </div>
        </header>

        {about.intro.display && (
          <section id={about.intro.title} className={styles.intro}>
            {about.intro.description}
          </section>
        )}

        {about.work.display && (
          <section className={styles.section}>
            <h2 id={about.work.title}>{about.work.title}</h2>
            <ol className={styles.timeline}>
              {about.work.experiences.map((experience, index) => (
                <Reveal as="li" key={`${experience.company}-${index}`} className={styles.timelineItem}>
                  <div className={styles.experienceHead}>
                    <h3 id={experience.company}>{experience.company}</h3>
                    <span className={styles.timeframe}>{experience.timeframe}</span>
                  </div>
                  <p className={styles.experienceRole}>{experience.role}</p>
                  <ul className={styles.achievements}>
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </section>
        )}

        {about.studies.display && (
          <section className={styles.section}>
            <h2 id={about.studies.title}>{about.studies.title}</h2>
            <ul className={styles.cards}>
              {about.studies.institutions.map((institution, index) => (
                <Reveal as="li" key={`${institution.name}-${index}`} delay={(index % 2) * 90}>
                  <div className={styles.card}>
                    <h3>{institution.name}</h3>
                    <p>{institution.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </section>
        )}

        {about.technical.display && (
          <section className={styles.section}>
            <h2 id={about.technical.title}>{about.technical.title}</h2>
            <ul className={styles.cards}>
              {about.technical.skills.map((skill, index) => (
                <Reveal as="li" key={`${skill.title}-${index}`} delay={(index % 2) * 90}>
                  <div className={styles.card}>
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <ul className={styles.tags}>
                      {skill.badges?.map((badge) => <li key={badge}>{badge}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
