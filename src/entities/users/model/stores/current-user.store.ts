'use client';

import { observable } from 'mobx';
import { User } from '@/entities/users/model/user';

export class CurrentUserStore {
  @observable public user: User | null = null;
}

export const currentUserStore = new CurrentUserStore();
