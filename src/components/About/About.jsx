import React, { useContext, useEffect } from 'react'

import styles from './About.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const About = () => {
    
    //Traduccion
    const { t } = useContext(TranslationContext);
    
    //Obtiene la altura maxima de las secciones de about
    useEffect (() => {
        const updateHeights = () => {
            //Obtiene todos los aboutItem
            const aboutItems = document.querySelectorAll(`.${styles.aboutItem}`);

            //Restablece la altura de cada aboutItem
            aboutItems.forEach(element => {
                element.style.height = 'auto';
            });
    
            //Encuentra la altura máxima de los aboutItem
            const heights = Array.from(aboutItems).map(element => element.offsetHeight);
            const maxHeight = Math.max(...heights);
    
            //Establece la altura máxima en cada aboutItem
            aboutItems.forEach(element => {
                element.style.height = `${maxHeight}px`;
                console.log(element.style.height);
            });
        };

        //Ejecuta la funcion
        updateHeights();

        //Añade al eventListener el metodo updateHeights cuando se redimensione la pagina
        window.addEventListener('resize', updateHeights);

        //Limpia el eventListener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', updateHeights);
        };
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