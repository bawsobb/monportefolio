import React from "react";

import { Avatar, Button, Flex, Icon, IconButton } from "@/once-ui/components";
import { baseURL, shop } from "@/app/resources";
import { Mailchimp } from "@/components";
import { Reveal } from "@/components/Reveal";
import { Terminal } from "@/components/home/Terminal";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { getPosts } from "@/app/utils/utils";
import { Meta, Schema } from "@/once-ui/modules";
import { cookies } from "next/headers";
import * as contentEn from "@/app/resources/content-en";
import * as contentFr from "@/app/resources/content-fr";
import styles from "@/components/home/home.module.scss";

const skillIcons = ["shield", "network", "server", "pulse"];

const stack = [
  "Wazuh",
  "Zabbix",
  "MikroTik",
  "Proxmox VE",
  "Suricata",
  "WireGuard",
  "pfSense",
  "Microsoft 365",
  "GLPI",
  "OPSI",
  "Asterisk",
  "VMware",
  "Linux",
  "Docker",
];

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";
  const content = locale === "en" ? contentEn.home : contentFr.home;

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
  const t = locale === "en" ? contentEn : contentFr;
  const ui = t.home.ui;

  const projectCount = getPosts(["src", "app", "work", "projects"]).length;
  const stats = [...ui.stats, { value: String(projectCount), label: ui.statsProjects }];
  const linkedin = t.social.find((item) => item.icon === "linkedin");

  return (
    <div className={styles.page}>
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

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.heroText}>
          <span className={styles.status} style={{ "--i": 0 } as React.CSSProperties}>
            <span className={styles.pulse} aria-hidden="true" />
            {ui.status}
          </span>
          <h1 className={styles.headline} style={{ "--i": 1 } as React.CSSProperties}>
            {ui.headlineLead} <span className={styles.accent}>{ui.headlineAccent}</span>
          </h1>
          <p className={styles.subline} style={{ "--i": 2 } as React.CSSProperties}>
            {t.home.subline}
          </p>
          <div className={styles.actions} style={{ "--i": 3 } as React.CSSProperties}>
            <Button href={t.work.path} variant="primary" size="l" arrowIcon data-border="rounded">
              {ui.ctaProjects}
            </Button>
            <Button href={t.about.path} variant="secondary" size="l" data-border="rounded">
              <Flex gap="8" vertical="center">
                {t.about.avatar.display && (
                  <Avatar style={{ marginLeft: "-0.75rem" }} src={t.person.avatar} size="m" />
                )}
                {ui.ctaAbout}
              </Flex>
            </Button>
          </div>
          <div className={styles.social} style={{ "--i": 4 } as React.CSSProperties}>
            {t.social.map(
              (item) =>
                item.link && (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    tooltip={item.name}
                    size="m"
                    variant="ghost"
                  />
                ),
            )}
          </div>
        </div>
        <div className={styles.heroVisual} style={{ "--i": 2 } as React.CSSProperties}>
          <Terminal
            title="oumar@bamako: ~"
            entries={[
              { command: "whoami", output: [t.person.name, ui.terminal.role] },
              { command: "cat certifications.txt", output: [ui.terminal.certs] },
              { command: "ls ~/stack", output: ["wazuh  zabbix  mikrotik  proxmox  wireguard"] },
              { command: "echo $STATUS", output: [ui.terminal.status] },
            ]}
          />
        </div>
      </section>

      {/* Chiffres clés */}
      <Reveal>
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Stack défilante */}
      <div className={styles.marquee} aria-label="Stack">
        <ul className={styles.track}>
          {[...stack, ...stack].map((name, index) => (
            <li key={`${name}-${index}`} aria-hidden={index >= stack.length}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* Expertise */}
      {t.about.technical.display && (
        <section className={styles.section}>
          <Reveal>
            <header className={styles.sectionHeader}>
              <span className={styles.eyebrow}>{ui.expertise.eyebrow}</span>
              <h2>{ui.expertise.title}</h2>
            </header>
          </Reveal>
          <div className={styles.skills}>
            {t.about.technical.skills.map((skill, index) => (
              <Reveal key={skill.title} delay={(index % 2) * 90}>
                <article className={styles.skill}>
                  <span className={styles.skillIcon}>
                    <Icon name={skillIcons[index % skillIcons.length]} size="m" />
                  </span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <ul>
                    {skill.badges.map((badge) => (
                      <li key={badge}>{badge}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Projets */}
      <section className={styles.section}>
        <Reveal>
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{ui.projects.eyebrow}</span>
            <div className={styles.sectionTitleRow}>
              <h2>{ui.projects.title}</h2>
              <Button href={t.work.path} variant="tertiary" size="s" suffixIcon="arrowRight">
                {ui.projects.all}
              </Button>
            </div>
          </header>
        </Reveal>
        <Projects range={[1, 3]} columns={3} />
      </section>

      {/* Blog */}
      <section className={styles.section}>
        <Reveal>
          <header className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{ui.blog.eyebrow}</span>
            <div className={styles.sectionTitleRow}>
              <h2>{ui.blog.title}</h2>
              <Button href={t.blog.path} variant="tertiary" size="s" suffixIcon="arrowRight">
                {ui.blog.all}
              </Button>
            </div>
          </header>
        </Reveal>
        <Reveal>
          <Posts range={[1, 1]} thumbnail direction="row" />
        </Reveal>
      </section>

      {/* Contact */}
      <Reveal>
        <section className={styles.contact}>
          <h2>{ui.contact.title}</h2>
          <p>{ui.contact.text}</p>
          <div className={styles.actions}>
            <Button
              href={`mailto:${t.person.email}`}
              variant="primary"
              size="l"
              prefixIcon="email"
              data-border="rounded"
            >
              {ui.contact.email}
            </Button>
            {linkedin && (
              <Button
                href={linkedin.link}
                variant="secondary"
                size="l"
                prefixIcon="linkedin"
                data-border="rounded"
              >
                LinkedIn
              </Button>
            )}
            <Button href={shop.url} variant="secondary" size="l" prefixIcon="shop" data-border="rounded">
              {ui.contact.shop}
            </Button>
          </div>
        </section>
      </Reveal>

      {t.newsletter.display && <Mailchimp newsletter={t.newsletter} />}
    </div>
  );
}
