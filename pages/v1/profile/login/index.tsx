import React, { SyntheticEvent, useState } from 'react';
import Layout from '../../../../layouts/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://localhost/v1/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        name,
        password,
      }),
    });

    await router.push('/');
  };

  return (
    <Layout>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </Layout>
  );
};

export default Login;
