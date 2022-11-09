import Features from "./components/Featured";
import Hero from "./components/Hero/Hero";
import Trailers from "./components/Trailers";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <Trailers />
      <Features />
    </main>
  )
}
