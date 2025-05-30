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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-cyan-400 w-[100vw]">
      <div className="bg-black p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Login </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <input
              id="email"
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your email"
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
              className="w-full px-4 py-2 border border-cyan-400 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type='submit'
            className="w-full bg-cyan-600 text-black font-bold py-2 rounded-lg hover:bg-cyan-700 transition bg"
          >
            Submit 🚀
          </button>
        </form>
        <p className="mt-6 text-cyan-200 text-sm text-center">
          Create a New Account? <a href="/signUp" className="underline hover:text-white">New</a>
        </p>
      </div>
    </section>
  )
}