'use client';

import { PersonalProjectType, ProfessionalProjectType } from '@/app/projects/data';
import { buttonStyles } from '@/components/ui/button/styles';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { ProfessionalProjectDetails } from '../project-details/professional';
import { useModal } from '@/hooks/use-modal';
import { Modal } from '@/components/ui/modal';
import { PersonalProjectDetails } from '../project-details/personal';

type ProjectCardProps = {
  project: ProfessionalProjectType | PersonalProjectType;
};

const inlineButtonStyle = buttonStyles.variants.inline;

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isOpen, showModal, closeModal } = useModal();

  return (
    <>
      <button onClick={() => showModal()} aria-label={`Read more about the ${project.name} project`} className="h-full w-full">
        <Card
          textAlign="left"
          alignItems="start"
          className="h-full gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="space-y-2">
            <Heading level="h2" as="h4" weight="light">
              {project.name}
            </Heading>

            {project.type === 'professional' && <p className="text-card-body-text-color">{project.role}</p>}
          </div>

          <span className={`${inlineButtonStyle} ml-auto mt-auto`}>Read More</span>
        </Card>
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        {project.type === 'professional' ? <ProfessionalProjectDetails {...project} /> : <PersonalProjectDetails {...project} />}
      </Modal>
    </>
  );
};
