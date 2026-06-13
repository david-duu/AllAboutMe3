import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  nvidiaProjects,
  personalProjects,
  type Project,
} from "../data/site-content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-neutral-400 transition-colors hover:text-blue-400"
          aria-label={`View ${project.name} on GitHub`}
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </a>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>
    </li>
  );
}

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="mt-6 grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Projects
      </h1>

      <div className="mt-12 space-y-16">
        <ProjectSection title="At NVIDIA" projects={nvidiaProjects} />
        <ProjectSection title="Personal Projects" projects={personalProjects} />
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-base font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:bg-neutral-900"
        >
          Contact Me!
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
