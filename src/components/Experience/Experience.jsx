import React, {useContext} from 'react'

import styles from './Experience.module.css';
import {getImageUrl} from '../../utils.js';
import experiences from '../../data/experiences.json';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Experience = () => {

    //Traduccion
    const { t, i18n } = useContext(TranslationContext);
    
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>{t('experience.title')}</h2>
            <div className={styles.content}>
                <ul className={styles.experiences}>
                    {
                        experiences.map((experiencesItem, id) => {
                            return (
                                <li
                                    key={id}
                                    className={`
                                        ${styles.experiencesItem}
                                        ${id%2 === 0
                                        ? `${styles.experiencesItemLeft}`
                                        : `${styles.experiencesItemRight}`
                                        }`
                                    }
                                >
                                    <img
                                        src={getImageUrl(experiencesItem.imageSrc)}
                                        alt={`${experiencesItem.organisation}`}
                                    />
                                    <div className={styles.experiencesItemDetails}>
                                        <h3>
                                            {`
                                                ${i18n.language === 'es'
                                                ? `${experiencesItem.rol}`
                                                : `${experiencesItem.role}`},
                                                ${experiencesItem.organisation}
                                            `}
                                        </h3>
                                        <p>
                                            {
                                                i18n.language === 'es'
                                                ? `${experiencesItem.fechaInicio}, ${experiencesItem.fechaFin}`
                                                : `${experiencesItem.startDate}, ${experiencesItem.endDate}`
                                            }
                                        </p>
                                        <ul>
                                            {
                                                i18n.language === 'es'
                                                ? experiencesItem.experiencias.map((exp, id) => {
                                                    return (
                                                        <li key={id}>{exp}</li>
                                                    );
                                                })
                                                : experiencesItem.experiences.map((exp, id) => {
                                                    return (
                                                        <li key={id}>{exp}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <span
                                            className={
                                                id%2 === 0
                                                ? `${styles.leftArrow}`
                                                : `${styles.rightArrow}`
                                            }
                                        />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    )
}