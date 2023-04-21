import styles from './layout.module.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles.shopLayout}>
            ShopLayout
            {children}
        </section>
    );
}
