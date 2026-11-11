import { getPosts } from "@/app/utils/utils";
import { ProjectCard } from "@/components";
import { Reveal } from "@/components/Reveal";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  range?: [number, number?];
  columns?: 2 | 3;
}

export function Projects({ range, columns = 2 }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <ul className={styles.grid} data-columns={columns}>
      {displayedProjects.map((post, index) => (
        <Reveal as="li" key={post.slug} delay={(index % columns) * 90}>
          <ProjectCard
            priority={index < 2}
            href={`/work/${post.slug}`}
            image={post.metadata.images[0]}
            title={post.metadata.title}
            description={post.metadata.summary}
            publishedAt={post.metadata.publishedAt}
            tech={post.metadata.tech}
          />
        </Reveal>
      ))}
    </ul>
  );
}
