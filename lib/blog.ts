import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  readingTime: string;
  content?: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .map((name) => {
      const slug = name.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, name), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        category: data.category || "AI Engineering",
        tags: data.tags || [],
        readingTime: data.readingTime || "5 min"
      };
    })
    .sort((a,b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const file = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const rendered = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    category: data.category || "AI Engineering",
    tags: data.tags || [],
    readingTime: data.readingTime || "5 min",
    content: rendered.toString()
  };
}
