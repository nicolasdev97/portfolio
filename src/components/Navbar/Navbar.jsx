import React, {useState, useContext} from 'react'

import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Navbar = () => {

  const { t } = useContext(TranslationContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener('scroll', () => {
    if(window.scrollY !== 0) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className={`${styles.navbar} ${isScrolled && styles.navbarFixed}`}>
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
            </ul>
        </div>
    </nav>
  );
};
