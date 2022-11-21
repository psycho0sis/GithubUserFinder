import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not avaliable';
  let currentRef = '';

  if (isLink) {
    currentRef = text && text.startsWith('http') ? text : `https://${text}`;
  }
  return (
    <div className={`${styles.infoItem}${text ? '' : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a className={styles.link} href={currentRef} target='_blank' rel='noreferrer'>
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
