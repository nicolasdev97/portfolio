import React, {useContext, useState} from 'react'

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard.jsx';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Projects = () => {

    //Traduccion
    const { t, i18n } = useContext(TranslationContext);

    //Define si el mouse pasa por encima de algun project
    const [isHovered, setIsHovered] = useState(null);

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>{t('projects.title')}</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard
                                key={id} //Id de cada project
                                project={project} //Propiedades de cada project
                                t={t}
                                i18n={i18n}
                                isHovered={isHovered === id} //Si el mouse pasa por encima de algun project, verifica cual project es al coincidir el id
                                isAnyHovered={isHovered !== null} //Verifica si el mouse esta encima de ningun project, el decir que isHovered no sea null
                                onHover={() => setIsHovered(id)} //Si el mouse esta por encima de algun project, establece el estado de isHovered con el id de ese project
                                onHoverOut={() => setIsHovered(null)} //Si el mouse ya no esta por encima de algun project, establece el estado de isHovered a null
                            />
                        );
                    })
                }
            </div>
        </section>
    )
}