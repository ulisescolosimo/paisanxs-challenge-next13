import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={styles.container}>
        <header className={styles.header}>
          <nav>
            <Link href='/'><small>Paisaflix</small></Link>
          </nav>
          <Image unoptimized={true} className={styles.avatar} width={50} height={50} alt='avatar' src="https://randomuser.me/api/portraits/men/83.jpg" />
        </header>
        {children}
        <footer>
          Should implement a footer
        </footer>
      </body>
    </html>
  )
}
