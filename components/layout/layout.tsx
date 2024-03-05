import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import React from "react";
import Image from 'next/image'
import {LayoutProps} from "../../types/gameTypes";

export const siteTitle = 'Card matching game';

export default function Layout({children, centerSection}: LayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                <div className={styles.leftSection}>
                    <Link href="/" className={styles.headerHomeLink}>
                        <Image
                            width={65}
                            height={65}
                            className={styles.headerLogo}
                            src="/images/splendex.png"
                            alt="logo"
                        />
                        <h1 className={styles.headerTitle}>splendex</h1>
                    </Link>
                </div>
                <div className={styles.centerSection}>
                    {centerSection}
                </div>
                <div className={styles.rightSection}>
                </div>
            </header>
            <main className={styles.mainContainer}>{children}</main>
        </div>
    )
}
