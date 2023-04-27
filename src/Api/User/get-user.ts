import React from 'react';
import { API_CONFIG } from '../config';
import { User } from '../../Types';

export const getUserFromServer = ({ username }: { username: string }) =>
  fetch('http://localhost:3000/Users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error finding user');
      }
      return response.json();
    })
    .then((users) => users.find((user: User) => user.username === username))
    .then((user) => {
      if (!user) {
        throw new Error('no user found');
      }
      return user;
    });
