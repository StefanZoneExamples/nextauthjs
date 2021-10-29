import React from 'react';

import Footer from 'components/footer';
import Header from 'components/header';
import Navigation from 'components/navigation';

import styles from './layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Navigation />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
}
