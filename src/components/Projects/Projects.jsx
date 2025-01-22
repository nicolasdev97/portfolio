import React, {useContext, useState} from 'react'

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard.jsx';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Projects = () => {

    const { t, i18n } = useContext(TranslationContext);

    const [isHovered, setIsHover] = useState(null);

  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>{t('projects.title')}</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id) => {
                    return (
                        <ProjectCard
                            key={id}
                            project={project}
                            t={t}
                            i18n={i18n}
                            isHovered={isHovered === id}
                            isAnyHovered={isHovered !== null}
                            onHover={() => setIsHover(id)}
                            onHoverOut={() => setIsHover(null)}
                        />
                    );
                })
            }
        </div>
    </section>
  )
}