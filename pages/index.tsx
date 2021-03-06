import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
export default function Home() {
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3000', {
          credentials: 'include',
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
