import styles from "@/styles/CreateUserForm.module.css";

export default function CreateUserForm({ createUserFunction }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create User Form</h2>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          createUserFunction(e);
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
          Create Account
        </button>
      </form>
    </div>
  );
}
