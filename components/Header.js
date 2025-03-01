import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin giriş kontrolü (örneğin, localStorage'dan kontrol edebilirsin)
  const checkAdmin = () => {
    const admin = localStorage.getItem('admin');
    setIsAdmin(admin === 'true');
  };

  // Sayfa yüklendiğinde admin kontrolü yap
  if (typeof window !== 'undefined') {
    checkAdmin();
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">MGCSite</Link>
      </div>
      {isAdmin && (
        <div className={styles.adminDropdown}>
          <span>Admin ▼</span>
          <div className={styles.dropdownContent}>
            <button onClick={() => {
              localStorage.removeItem('admin');
              window.location.href = '/';
            }}>Çıkış Yap</button>
          </div>
        </div>
      )}
    </header>
  );
}
