'use client';

import styles from './home-page.module.scss';
import { currentUserStore } from '@/entities/users/model/stores/current-user.store';
import { observer } from 'mobx-react-lite';

export const HomePage = observer(() => {
  console.log(currentUserStore.user);

  return <div className={styles.page}>home page</div>;
});
