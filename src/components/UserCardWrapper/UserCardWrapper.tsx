import { Loader } from 'components/Loader';

import { useUser } from './use-user';
import { UserCard } from './UserCard';

import styles from './UserCardWrapper.module.scss';

export const UserCardWrapper = () => {
  const [currentUser, asyncUser, status] = useUser();

  return (
    <>
      {!currentUser && !asyncUser && status !== 'loading' && (
        <div className={styles.userCardWrapperFlex}>Please, enter some username to the input</div>
      )}
      {(currentUser || asyncUser) && status !== 'loading' && (
        <div className={styles.userCardWrapperGrid}>
          {status === 'finishing' && asyncUser && <UserCard user={asyncUser} />}
          {status === 'idle' && currentUser && <UserCard user={currentUser} />}
        </div>
      )}

      {status === 'loading' && (
        <div className={styles.userCardWrapperFlex}>
          <Loader />
        </div>
      )}
    </>
  );
};
