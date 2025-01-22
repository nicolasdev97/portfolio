import React, {useState, useContext, useEffect} from 'react'

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

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Si la página está en la parte superior, activamos "hero"
      if (scrollY === 0) {
        setActiveSection('hero');
        return;
      }

      // Si la página está al final, activamos "contact"
      if (windowHeight + scrollY >= documentHeight) {
        setActiveSection('contact');
        return;
      }

      // Verificar qué sección está en el viewport
      let foundActiveSection = false; // Para evitar activaciones múltiples
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (!foundActiveSection && rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4) {
          setActiveSection(section.id);
          foundActiveSection = true;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                <li className={activeSection === 'hero' ? styles.active : styles.inactive}><a href='#hero'>{t('nav.hero')}</a></li>
                <li className={activeSection === 'about' ? styles.active : styles.inactive}><a href='#about'>{t('nav.about')}</a></li>
                <li className={activeSection === 'experience' ? styles.active : styles.inactive}><a href='#experience'>{t('nav.experience')}</a></li>
                <li className={activeSection === 'projects' ? styles.active : styles.inactive}><a href='#projects'>{t('nav.projects')}</a></li>
                <li className={activeSection === 'contact' ? styles.active : styles.inactive}><a href='#contact'>{t('nav.contact')}</a></li>
            </ul>
        </div>
    </nav>
  );
};