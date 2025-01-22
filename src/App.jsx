import styles from './App.module.css'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { TranslateButton } from './components/TranslateButton/TranslateButton'
import TranslationProvider from './components/TranslationContext/TranslationContext'

function App() {

  return (
    <div className={styles.App}>
      <TranslationProvider>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <TranslateButton />
      </TranslationProvider>
    </div>
  )
}

export default App;