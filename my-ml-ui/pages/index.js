import Head from 'next/head'
import Link from 'next/link'
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
          <h1 className={styles.mainHeader}>
              My ML
          </h1>
          <p style={{padding: 50 + "px"}}>
            A comprehensive tool to simplify the storage and retrieval of data sets, data visualization and creation of machine learning workflows.
          </p>
          <button type="button" href="/datasets">
            <Link href="/datasets"><a>Get Started!</a></Link>
          </button>
        </div>
      </div>
      <div className={styles.scolumnside}>
      </div>
      <footer>
      </footer>
    </div>
  )
}
