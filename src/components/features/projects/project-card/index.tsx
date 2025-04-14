'use client';

import { ProjectType } from '@/app/projects/data';
import { ModalDialog } from '@/components/ui/modal-dialog';
import { useRef } from 'react';
import { ProjectDetails } from '../project-details';
import { buttonStyles } from '@/components/ui/button/styles';

type ProjectCardProps = {
  project: ProjectType;
};

const inlineButtonStyle = buttonStyles.variants.inline;

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="flex flex-col gap-6 rounded-md bg-homepage-card-bg p-6 text-left text-foreground shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <div className="space-y-2">
          <h2 className="text-xl font-light">{project.company}</h2>
          <p className="text-foreground text-gray-500">{project.role}</p>
        </div>

        <span className={`${inlineButtonStyle} ml-auto mt-auto`}>Read More</span>
      </button>

      <ModalDialog ref={dialogRef}>
        <ProjectDetails {...project} />
      </ModalDialog>
    </>
  );
};
