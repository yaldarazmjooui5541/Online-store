import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`ورود با ایمیل: ${email} و رمز عبور: ${password}`);

  }

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>ورود به حساب کاربری</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ایمیل یا نام کاربری:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 5, marginBottom: 15, boxSizing: 'border-box' }}
          />
        </label>

        <label>
          رمز عبور:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 5, marginBottom: 15, boxSizing: 'border-box', }}
          />
        </label>

        <button type="submit" style={{
          width: '100%',
          padding: 10,
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 16,
        }}>
          ورود
        </button>
      </form>

      <p style={{ marginTop: 15, textAlign: 'center' }}>
        حساب کاربری نداری؟{' '}
        <a href="/register" style={{ color: "#292A59", cursor: 'pointer' }}>
          ثبت نام کن
        </a>
      </p>
    </div>
  );
}
