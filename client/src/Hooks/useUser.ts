import { useState, useEffect } from 'react';

type UserInfo = {
  email: string;
  name: string;
  userId: string;
};

type User = {
  token: string;
  userInfo: UserInfo;
};

export const useUser = () => {
  const [user, setUser] = useState<User>();

  const getUser = () => {
    const LS = localStorage.getItem('venue-app');
    const user = LS && JSON.parse(LS);
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user];
};
