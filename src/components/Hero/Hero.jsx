import React from 'react'

import styles from './Hero.module.css';
import {getImageUrl} from '../../utils.js';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nicolas</h1>
            <p className={styles.description}>
                I'm a frontend developer with 2 years
                of experience using React and Angular.
                Check out my projects!
            </p>
            <a
                href='mailto: nicolas.po.im@gmail.com'
                className={styles.contactBtn}
            >
                Contact me
            </a>
        </div>
        <img
            src={getImageUrl('hero/heroImage.png')}
            alt='Hero image of me'
            className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
