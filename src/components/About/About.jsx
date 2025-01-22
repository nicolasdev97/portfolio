import React, { useContext } from 'react'

import styles from './About.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const About = () => {

    const { t } = useContext(TranslationContext);
    
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