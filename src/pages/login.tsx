import { useNavigate } from 'react-router-dom';
import styles from '../css/login.module.css';

const Login = () => {
  const navigate = useNavigate(); // ⬅️ hook for navigation

  const handleSignIn = () => {
    navigate('/dashboard'); // ⬅️ navigate to dashboard
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.left}>
        <h1>Enterprise Inventory System</h1>
        <p>Streamline your inventory management with our enterprise-grade solution</p>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <div className={styles.form}>
          <h2>Welcome back</h2>
          <p>Please sign in to your account</p>

          <div className={styles.inputGroup}>
            <input 
              type="email" 
              className={styles.inputField} 
              placeholder="Enter your email"
            />
            <input 
              type="password" 
              className={styles.inputField} 
              placeholder="Enter your password"
            />
            <button className={styles.signInBtn} onClick={handleSignIn}>Sign In</button>
          </div>

          <div className={styles.loginOptions}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className={styles.forgotPassword}>Forgot password?</a>
          </div>

          <div className={styles.footer}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
