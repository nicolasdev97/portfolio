import React, {useState, useContext, useEffect} from 'react'

import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Navbar = () => {

  //Traduccion
  const { t } = useContext(TranslationContext);

  //Cambia el icono del menu dependiendo si esta abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  //Define si se ha scrolleado en la pagina o no
  const [isScrolled, setIsScrolled] = useState(false);

  //Define en que seccion de la pagina esta
  const [activeSection, setActiveSection] = useState('hero');

  //Controla el navbar para que siempre este visible
  //Controla que seccion esta visible para que de igual manera sea visible en el navbar
  //Dependiendo de cada scroll que se hace en la pagina
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      //Cantidad de px que la pagina ha sido scrolleada
      const scrollY = window.scrollY;
      //Altura en px visible en la pantalla
      const windowHeight = window.innerHeight;
      //Altura total en px de la pagina
      const documentHeight = document.documentElement.scrollHeight;
      
      //Si la pagina esta en la parte superior
      //Indica que no se ha scrolleado y el navbar debe estar arriba
      //Activa la seccion hero en el navbar
      if (scrollY === 0) {
        setIsScrolled(false);
        setActiveSection('hero');
        return;
      }
      else {
        setIsScrolled(true); //Indica que se ha scrolleado y el navbar debe bajar
      }

      //Si la pagina esta al final, se activa contact
      if (windowHeight + scrollY >= documentHeight) {
        setActiveSection('contact');
        return;
      }

      //Verifica que seccion esta visible
      let foundActiveSection = false; //Evita que dos secciones se activen al tiempo
      sections.forEach((section) => {
        //Obtiene la posicion de la seccion
        const rect = section.getBoundingClientRect();
        //Si la seccion es visible entre un 40% y 60% se activa
        if (!foundActiveSection && rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4) {
          setActiveSection(section.id);
          foundActiveSection = true;
        }
      });
    };

    //Añade al eventListener el metodo handleScroll cuando se scrollee en la pagina
    window.addEventListener('scroll', handleScroll);

    //Limpia el eventListener despues de ejecutar el useEffect
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //Solo se ejecuta una vez

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