import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Common.module.css'
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My ML</title>
        <meta name="description" content="Custom ML modeling solution by Carsen Ball" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <div className={styles.columnside}>

      </div>
      <div className={styles.columnmiddle}>
        <div>
          <h1>
              My ML
          </h1>
          <p>
              A tool to explore data and build predictive models.
          </p>
        </div>
      </div>
      <div className={styles.scolumnside}>
      </div>
      <footer>
      </footer>
    </div>
  )
}
