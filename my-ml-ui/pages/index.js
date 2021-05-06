import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>My ML</title>
        <meta name="description" content="Custom ML modeling solution by Carsen Ball" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My ML
        </h1>
        <p>
          A tool to explore data and build predictive models.
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
