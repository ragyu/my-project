import React from 'react';
import { Project, getAllProject } from '@/service/projects';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

// type Props = {project:Project}
export default async function ProjectsSection() {
  const projects = await getAllProject();

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-3xl">
        projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28 mb-20">
        {projects.map((project: Project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-sliderUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        className="rounded-xl shadow-xl hover:opacity-70"
                        src={`/images/projects/${project.path}.png`}
                        alt={project.path}
                        width={1000}
                        height={1000}
                      />
                    </Link>
                  </div>
                  <div className="md:mt-6 md:w-1/2  mt-8 text-center md:text-left">
                    <h1 className="md:text-3xl font-bold mb-6 text-2xl">
                      {project.title}
                    </h1>
                    <span>{project.participant}</span>
                    <p className="md:line-clamp-3 text-xl leading-7 my-4 text-neutral-600">
                      {project.description}
                    </p>
                    {project.category.map((skill, index) => (
                      <span
                        key={index}
                        className="sm-text rounded bg-gray-200 text-gray-500 px-2 mx-1"
                      >
                        {skill}{' '}
                      </span>
                    ))}
                    <div className="flex flex-row align-bottom space-x-4 justify-center mt-4 md:justify-start">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={40}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={40}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
