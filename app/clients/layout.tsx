import styles from './layout.module.css';

export default function ClientsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className={styles.layout}>
            Clients Layout
            {children}
        </section>
    );
}
