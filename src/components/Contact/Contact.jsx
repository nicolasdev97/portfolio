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
                <a href="mailto:nicolas.po.im@gmail.com">
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt='Email icon'
                    />
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/nicolas-po/">
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt='Linkedin icon'
                    />
                </a>
            </li>
            <li className={styles.link}>
                <a href="https://github.com/nicolasdev97">
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt='Github icon'
                    />
                </a>
            </li>
        </ul>
    </footer>
  )
}
