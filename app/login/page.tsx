import { createElement } from 'react';

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; from?: string };
}) {
  return createElement(
    'div',
    {
      style: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        background: '#f5f5f5',
      },
    },
    createElement(
      'form',
      {
        action: '/api/login',
        method: 'POST',
        style: {
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
        },
      },
      createElement('h1', { style: { fontSize: '1.25rem', margin: 0 } }, 'Enter Password'),
      createElement('input', {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
        style: {
          padding: '0.5rem',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
        },
      }),
      createElement('input', {
        type: 'hidden',
        name: 'from',
        value: searchParams?.from || '/',
      }),
      searchParams?.error
      ? createElement(
        'p',
        { style: { color: 'red', margin: 0, fontSize: '0.875rem' } },
        'Incorrect password. Please try again.'
        )
      : null,
      createElement(
        'button',
        {
          type: 'submit',
          style: {
            padding: '0.5rem',
            fontSize: '1rem',
            background: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          },
        },
        'Enter'
        )
      )
    );
}
