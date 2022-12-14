import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const worksDirectory = join(process.cwd(), "_work");

export function getWorkSlugs() {
  return fs.readdirSync(worksDirectory);
}

export function getWorkBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(worksDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllWorks(fields: string[] = []) {
  const slugs = getWorkSlugs();
  const posts = slugs
    .map((slug) => getWorkBySlug(slug, fields))
    .sort((work1, work2) => (work1.Number > work2.Number ? 1 : -1));
  return posts;
}
