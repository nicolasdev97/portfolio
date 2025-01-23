import React, { useEffect, useState } from 'react'

import styles from './ProjectCard.module.css';
import {getImageUrl} from '../../utils.js';

export const ProjectCard = ({project : {projectTitle, imageSrc, description, skills, source, tituloProyecto, descripcion}, t, i18n, isHovered, isAnyHovered, onHover, onHoverOut}) => {

    //Define la opacidad
    //Si isHovered no es null, es decir, si el mouse pasa por encima de al menos algun project
    //O si isAnyHovered es null, es decir, si el mouse no esta pasando por encima de ningun project para activar todas las cartas
    const opacity = isHovered || !isAnyHovered ? 1 : 0.5;

    //Define la altura maxima de cada projectCard
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        //Obtiene todos los skills con su style
        const skillsElements = document.querySelectorAll(`.${styles.skills}`);
    
        //Encuentra la altura maxima de los skills
        const heights = Array.from(skillsElements).map(element => element.offsetHeight);
        const calculatedMaxHeight = Math.max(...heights);
        
        //Establece la altura maxima
        setMaxHeight(calculatedMaxHeight);

        //Actualiza la altura maxima en todos los skills
        skillsElements.forEach(element => {
          element.style.height = `${calculatedMaxHeight}px`;
        });
    }, [skills]); //Solo se vuelve a ejecutar cuando la lista de skills cambie

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