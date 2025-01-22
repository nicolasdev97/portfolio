import React, { useEffect, useState } from 'react'

import styles from './ProjectCard.module.css';
import {getImageUrl} from '../../utils.js';

export const ProjectCard = ({project : {projectTitle, imageSrc, description, skills, source, tituloProyecto, descripcion}, t, i18n, isHovered, isAnyHovered, onHover, onHoverOut}) => {

    const opacity = isHovered || !isAnyHovered ? 1 : 0.5;

    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        // Obtener todos los skills
        const skillsElements = document.querySelectorAll(`.${styles.skills}`);
    
        // Encontrar la altura más alta de los skills
        const heights = Array.from(skillsElements).map(element => element.offsetHeight);
        const maxHeight = Math.max(...heights);
    
        // Establecer la altura máxima en cada skills
        skillsElements.forEach(element => {
          element.style.height = `${maxHeight}px`;
        });
    
        setMaxHeight(maxHeight);
      }, [skills]); // Solo se vuelve a ejecutar cuando la lista de skills cambie

  return (
    <a
        href={source}
        className={styles.container}
        onMouseEnter={onHover}
        onMouseLeave={onHoverOut}
        style={{opacity}}
    >
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
    </a>
  )
}