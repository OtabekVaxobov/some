import React, { SyntheticEvent, useState } from 'react';
import Layout from '../../../../layouts/Layout';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch('http://localhost:3000/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input
          name="login"
          className="form-control"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Register;
