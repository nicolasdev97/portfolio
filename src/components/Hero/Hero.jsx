import React, { useContext } from 'react'

import styles from './Hero.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Hero = () => {

    const { t } = useContext(TranslationContext);
    
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{t('hero.title')}</h1>
            <p className={styles.description}>
                {t('hero.description')}
            </p>
            <a
                href='mailto: nicolas.po.im@gmail.com'
                className={styles.contactBtn}
            >
                {t('hero.contact')}
            </a>
        </div>
        <img
            src={getImageUrl('hero/meHero.png')}
            alt={t('hero.heroImage')}
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
