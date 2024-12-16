'use client';

import { usersApi } from '@/shared/api/users.api';
import { currentUserStore } from '@/entities/users/model/stores/current-user.store';
import { User } from '@/entities/users/model/user';
import { FC, useEffect } from 'react';

export const ClientInit: FC = () => {
  useEffect(() => {
    initCurrentUser().then();
  });

  return null;
};

async function initCurrentUser(): Promise<void> {
  const result = await usersApi.getMyProfile();
  if (result.data) {
    currentUserStore.user = new User(result.data);
  } else {
    console.log(result.error);
  }
}
