import React, {useContext} from 'react'

import styles from './Experience.module.css';
import {getImageUrl} from '../../utils.js';
import skills from '../../data/skills.json';
import history from '../../data/history.json';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Experience = () => {

    const { t, i18n } = useContext(TranslationContext);
    
  return (
    <section className={styles.container} id='experience'>
        <h2 className={styles.title}>{t('experience.title')}</h2>
        <div className={styles.content}>
            {/* <div className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img
                                        src={getImageUrl(skill.imageSrc)}
                                        alt={skill.title}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })
                }
            </div> */}
            <ul className={styles.history}>
                {
                    history.map((historyItem, id) => {
                        return (
                            <li key={id} className={`${styles.historyItem} ${id%2 === 0 ? `${styles.historyItemLeft}` : `${styles.historyItemRight}`}`}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation}`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${i18n.language === 'es' ? `${historyItem.rol}` : `${historyItem.role}`}, ${historyItem.organisation}`}</h3>
                                    <p>{i18n.language === 'es' ? `${historyItem.fechaInicio}, ${historyItem.fechaFin}` : `${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                    <ul>
                                        {
                                            i18n.language === 'es'
                                            ? historyItem.experiencias.map((exp, id) => {
                                                return (
                                                    <li key={id}>{exp}</li>
                                                );
                                            })
                                            : historyItem.experiences.map((exp, id) => {
                                                return (
                                                    <li key={id}>{exp}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <span className={`${id%2 === 0 ? `${styles.leftArrow}` : `${styles.rightArrow}`}`}></span>
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
