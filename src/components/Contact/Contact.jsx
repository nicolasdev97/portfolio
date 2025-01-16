import React, {useContext} from 'react'

import styles from './Contact.module.css';
import {getImageUrl} from '../../utils.js';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const Contact = () => {

    const { t } = useContext(TranslationContext);

  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.text')}</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img
                    src={getImageUrl('contact/emailIcon.png')}
                    alt='Email icon'
                />
                <a href="mailto:nicolas.po.im@gmail.com">nicolas.po.im@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img
                    src={getImageUrl('contact/linkedinIcon.png')}
                    alt='Linkedin icon'
                />
                <a href="https://www.linkedin.com/in/nicolas-po/">linkedin.com/in/nicolas-po</a>
            </li>
            <li className={styles.link}>
                <img
                    src={getImageUrl('contact/githubIcon.png')}
                    alt='Github icon'
                />
                <a href="https://github.com/nicolasdev97">github.com/nicolasdev97</a>
            </li>
        </ul>
    </footer>
  )
}
