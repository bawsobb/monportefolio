import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { Schema, Meta } from "@/once-ui/modules";
import { cookies } from "next/headers";
import { person as personEn, blog as blogEn, newsletter as newsletterEn } from "@/app/resources/content-en";
import { person as personFr, blog as blogFr, newsletter as newsletterFr } from "@/app/resources/content-fr";

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value || "fr";
  const content = locale === "en" ? blogEn : blogFr;

  return Meta.generate({
    title: content.title,
    description: content.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(content.title)}`,
    path: content.path,
  });
}

export default async function Blog() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as "en" | "fr") || "fr";
  const t = locale === "en" 
    ? { person: personEn, blog: blogEn, newsletter: newsletterEn } 
    : { person: personFr, blog: blogFr, newsletter: newsletterFr };

  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={t.blog.title}
        description={t.blog.description}
        path={t.blog.path}
        image={`${baseURL}/og?title=${encodeURIComponent(t.blog.title)}`}
        author={{
          name: t.person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${t.person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {t.blog.title}
      </Heading>
      <Column
				fillWidth flex={1}>
				<Posts range={[1,1]} thumbnail direction="column"/>
				<Posts range={[2,3]} thumbnail/>
				<Posts range={[4]} columns="2"/>
			</Column>
      {t.newsletter.display && <Mailchimp newsletter={t.newsletter} />}
    </Column>
  );
}
