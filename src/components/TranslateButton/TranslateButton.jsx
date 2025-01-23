import React, {useContext} from 'react'

import styles from './TranslateButton.module.css';

import { TranslationContext } from '../TranslationContext/TranslationContext.jsx';

export const TranslateButton = () => {

  //Traduccion  
  const { t, toggleLanguage } = useContext(TranslationContext);

  return (
    <button
        className={styles.button}
        onClick={toggleLanguage}
    >
        {t('nav.language')}
    </button>
  )
}