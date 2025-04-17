'use client';

import { ProjectType } from '@/app/projects/data';
import { ModalDialog } from '@/components/ui/modal-dialog';
import { useRef } from 'react';
import { ProjectDetails } from '../project-details';
import { buttonStyles } from '@/components/ui/button/styles';
import { Card } from '@/components/ui/card';

type ProjectCardProps = {
  project: ProjectType;
};

const inlineButtonStyle = buttonStyles.variants.inline;

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button onClick={() => dialogRef.current?.showModal()} aria-label={`Read more about the ${project.company} project`}>
        <Card
          textAlign="left"
          alignItems="start"
          className="h-full gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-light">{project.company}</h2>
            <p className="text-card-body-text-color">{project.role}</p>
          </div>

          <span className={`${inlineButtonStyle} ml-auto mt-auto`}>Read More</span>
        </Card>
      </button>

      <ModalDialog ref={dialogRef}>
        <ProjectDetails {...project} />
      </ModalDialog>
    </>
  );
};
