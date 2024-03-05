import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import React, {ReactNode} from "react";
import Image from 'next/image'

export const siteTitle = 'Card matching game';

interface LayoutProps {
    children: React.ReactNode
    home?: boolean
    centerSection?: ReactNode
}

export default function Layout({children, home, centerSection}: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                <div className={styles.leftSection}>
                    <Image
                        width={65}
                        height={65}
                        className={styles.headerLogo}
                        src="/images/splendex.png"
                        alt="logo"
                    />
                    <h1 className={styles.headerTitle}>splendex</h1>
                </div>
                <div className={styles.centerSection}>
                    {centerSection}
                </div>
                <div className={styles.rightSection}>
                </div>
            </header>
            <main>{children}</main>
            <footer>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">Back</Link>
                    </div>
                )}
            </footer>
        </div>
    )
}
