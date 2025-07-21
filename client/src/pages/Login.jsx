import { useState, useContext } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
 
  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <section
      className="min-h-screen w-screen fixed top-0 left-0 flex items-center justify-center"
      style={{ background: '#fff7ed', zIndex: 2 }}
    >
      <div
        className="p-8 rounded-2xl w-full max-w-sm border border-yellow-200"
        style={{
          boxShadow: '0 8px 32px 0 rgba(120, 72, 0, 0.35), 0 1.5px 8px 0 rgba(120, 72, 0, 0.18)',
          background: '#fff3e0',
        }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-tight" style={{ color: '#784800', letterSpacing: '0.02em' }}>
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <input
              id="email"
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 transition"
              style={{
                borderColor: '#e0c48c',
                background: '#fff7ed',
                color: '#784800',
                fontWeight: 500,
              }}
              placeholder="Enter your email"
              autoComplete="username"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 transition"
              style={{
                borderColor: '#e0c48c',
                background: '#fff7ed',
                color: '#784800',
                fontWeight: 500,
              }}
              placeholder="********"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full font-bold py-2 rounded-lg transition shadow-md"
            style={{
              background: '#784800',
              color: '#fff7ed',
              letterSpacing: '0.03em',
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#a67c52';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = '#784800';
              e.currentTarget.style.color = '#fff7ed';
            }}
          >
            Submit 🚀
          </button>
        </form>
        <p className="mt-6 text-sm text-center" style={{ color: '#a67c52' }}>
          Create a New Account?{' '}
          <a href="/signup" className="underline hover:text-yellow-800 transition" style={{ color: '#784800', fontWeight: 600 }}>
            Sign Up
          </a>
        </p>
      </div>
    </section>
  )
}