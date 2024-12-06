import styles from "@/styles/LoginForm.module.css";

export default function LoginForm({ loginUserFunction }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login Form</h2>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          loginUserFunction(e);
        }}
      >
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input type="email" name="email" className={styles.input} />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input type="password" name="password" className={styles.input} />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
