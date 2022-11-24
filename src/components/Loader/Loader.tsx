import { Grid } from 'react-loader-spinner';

import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <Grid
      height='80'
      width='80'
      color='#eee'
      ariaLabel='grid-loading'
      radius='12.5'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
    />
  </div>
);
