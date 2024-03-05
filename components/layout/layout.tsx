import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import React from "react";

export const siteTitle = 'Card matching game';

interface LayoutProps {
    children: React.ReactNode
    home?: boolean
}

export default function Layout({children, home}: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                <>
                    <h1 className={utilStyles.heading2Xl}>Base</h1>
                </>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Back</Link>
                </div>
            )}
        </div>
    )
}
