// dashboard.tsx
import styles from '../css/dashboard.module.css';
import { FaWarehouse, FaBoxOpen, FaBell, FaUserCircle, FaMoon } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>InventoryPro</div>
        <nav className={styles.navMenu}>
          <a href="#" className={styles.navItem + ' ' + styles.active}>Dashboard</a>
          <a href="#" className={styles.navItem}>Warehouses</a>
          <a href="#" className={styles.navItem}>Inventory</a>
          <a href="#" className={styles.navItem}>Users</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div>
            <h2>Welcome back, John!</h2>
            <p>Inventory Manager</p>
          </div>
          <div className={styles.headerIcons}>
            <FaMoon />
            <FaBell />
            <FaUserCircle className={styles.profileIcon} />
          </div>
        </header>

        {/* Stats Cards */}
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p>Total Warehouses</p>
              <FaWarehouse />
            </div>
            <h3>12 <span className={styles.growth}>↑ +2 this month</span></h3>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p>Total Items</p>
              <FaBoxOpen />
            </div>
            <h3>45,678 <span className={styles.subtext}>items in stock</span></h3>
          </div>

          <div className={styles.notificationsCard}>
            <h4>Notifications</h4>
            <ul>
              <li className={styles.warning}>⚠️ Low stock alert: Item #45892</li>
              <li className={styles.error}>❌ Failed delivery: Order #78391</li>
            </ul>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className={styles.transactionsSection}>
          <h4>Recent Transactions</h4>
          <ul>
            <li>
              <span className={styles.received}>⬇ Stock Received</span> — Warehouse A (2 hours ago)
            </li>
            <li>
              <span className={styles.shipped}>⬆ Stock Shipped</span> — Warehouse B (5 hours ago)
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
