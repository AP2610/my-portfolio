'use client';

import { ProjectType } from '@/app/projects/data';
import { Button } from '@/components/ui/button';
import { ModalDialog } from '@/components/ui/modal-dialog';
import { useRef } from 'react';
import { ProjectDetails } from '../project-details';

type ProjectCardProps = {
  project: ProjectType;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <article className="flex h-full max-w-[350px] flex-col overflow-hidden rounded-lg bg-cosmic-latte-600/10 p-4 shadow-md transition-transform hover:scale-[1.02] hover:transform dark:border-2 dark:border-rich-black-400 dark:bg-rich-black-400/30">
        <h2 className="text-2xl text-accent-electric-blue">{project.company}</h2>
        <p className="text-xl font-semibold text-foreground">{project.role}</p>

        <Button variant="primary-outline" className="mt-auto" onClick={() => dialogRef.current?.showModal()}>
          Read More
        </Button>
      </article>

      <ModalDialog ref={dialogRef}>
        <ProjectDetails {...project} />
      </ModalDialog>
    </>
  );
};
