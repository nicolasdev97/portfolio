import React, { useContext, useEffect } from 'react'

import styles from './About.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const About = () => {
    
    //Traduccion
    const { t } = useContext(TranslationContext);
    
    //Obtiene la altura maxima de las secciones de about
    useEffect (() => {
        //Obtiene todos los aboutItem
        const aboutItems = document.querySelectorAll(`.${styles.aboutItem}`);

        //Encuentra la altura maxima de los aboutItem
        const heights = Array.from(aboutItems).map(element => element.offsetHeight);
        const maxHeight = Math.max(...heights);

        //Establece la altura maxima en cada aboutItem
        aboutItems.forEach(element => {
            element.style.height = `${maxHeight}px`;
        });
    }, []); //Solo se ejecuta una vez
    
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>{t('about.title')}</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt={t('about.frontendIcon')}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>{t('about.frontendTitle')}</h3>
                            <p>{t('about.frontendDescription')}</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/uiIcon.png')}
                            alt={t('about.uiIcon')}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>{t('about.uiTitle')}</h3>
                            <p>{t('about.uiDescription')}</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl('about/gameIcon.png')}
                            alt={t('about.unityIcon')}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>{t('about.unityTitle')}</h3>
                            <p>{t('about.unityDescription')}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}