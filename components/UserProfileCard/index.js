import styles from "@/styles/UserProfileCard.module.css";

export default function UserProfileCard({ userInformation }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Profile</h2>
      <p className={styles.text}>Email: {userInformation?.email}</p>
    </div>
  );
}
