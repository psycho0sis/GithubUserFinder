import styles from './UserStatItem.module.scss';

interface UserStatItemProps {
  label: string;
  content: number;
}

export const UserStatItem = ({ content, label }: UserStatItemProps) => (
  <div className={styles.userStatItem}>
    <div className={styles.info}>
      <p className={styles.infoTitle}>{label}</p>
      <div className={styles.infoNumber}>{content}</div>
    </div>
  </div>
);
