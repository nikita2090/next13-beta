import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.main}>
            <h1>Home Page</h1>
            <br />
            <br />

            <h2>Shop</h2>
            <Link href={'/products'}>Products</Link>
            <Link href={'/contacts'}>Contacts</Link>
            <br />
            <br />

            <h2>Marketing</h2>
            <Link href={'/clients'}>Clients</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
        </div>
    );
}
