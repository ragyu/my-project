import { readFile } from "fs/promises";
import path from "path";
export type Project = {
  title: string;
  description: string;
  date: Date;
  category: string[];
  path: string;
  featured: boolean;
  github: string;
  link: string;
  participant: string;
};
export type ProjectData = Project & { content: string };
export async function getFeaturedProject(): Promise<Project[]> {
  return getAllProject() //
    .then((projects) => projects.filter((project) => project.featured));
}
export async function getAllProject(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  return readFile(filePath, "utf-8")
    .then<Project[]>((data) => JSON.parse(data))
    .then((projects) => projects);
}
export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "projects",
    `${fileName}.md`
  );
  const metadata = await getAllProject() //
    .then((projects) => projects.find((project) => project.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 프로젝트를 찾을수 없음`);
  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}
