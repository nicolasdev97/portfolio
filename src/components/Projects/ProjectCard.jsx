import React from 'react'

import styles from './ProjectCard.module.css';
import {getImageUrl} from '../../utils.js';

export const ProjectCard = ({project : {projectTitle, imageSrc, description, skills, demo, source, tituloProyecto, descripcion}, t, i18n}) => {
  return (
    <div className={styles.container}>
        <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${projectTitle}`}
            className={styles.image}
        />
        <h3 className={styles.title}>{`${i18n.language === 'es' ? t(`${tituloProyecto}`) : t(`${projectTitle}`)}`}</h3>
        <p className={styles.description}>{`${i18n.language === 'es' ? t(`${descripcion}`) : t(`${description}`)}`}</p>
        <ul className={styles.skills}>
            {
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    );
                })
            }
        </ul>
        <div className={styles.links}>
            <a href={demo} className={styles.link}>Demo</a>
            <a href={source} className={styles.link}>{t('projects.code')}</a>
        </div>
    </div>
  )
}
