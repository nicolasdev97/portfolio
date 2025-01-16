import React, {useState, useContext} from 'react'

import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Navbar = () => {

  const { t, i18n, toggleLanguage } = useContext(TranslationContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>{t('nav.title')}</a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={
                  menuOpen
                  ? getImageUrl('nav/closeIcon.png')
                  : getImageUrl('nav/menuIcon.png')
                }
                alt={t('nav.menuBtn')}
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
              >
                <li><a href='#about'>{t('nav.about')}</a></li>
                <li><a href='#experience'>{t('nav.experience')}</a></li>
                <li><a href='#projects'>{t('nav.projects')}</a></li>
                <li><a href='#contact'>{t('nav.contact')}</a></li>
                <li>
                  <button
                    className={`${styles.menuButton} ${i18n.language && styles.menuButtonPressed}`}
                    onClick={toggleLanguage}
                  >
                    {t('nav.language')}
                  </button>
                </li>
            </ul>
        </div>
    </nav>
  );
};
