import { useEffect, useState } from 'react';
import Layout from '../../../layouts/Layout';
export default function Profile() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3000', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer {process.env.TOKEN_SECRET}`, // look
            Host: 'http://localhost:3000',
          },
          method: 'GET',
        });

        const content = await response.json();

        setMessage(`Hi ${content.name}`);
        setAuth(true);
      } catch (e) {
        setMessage('You are not logged in');
        setAuth(false);
      }
    })();
  });

  return <Layout auth={auth}>{message}</Layout>;
}
