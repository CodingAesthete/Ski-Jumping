import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).every(value => !value)) {
      setError("Please fill in the fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError("This username or password already exists.");
        setLoading(false);
        return;
      }

      setLoading(false);
      setError(null);
      navigate('/sign-in');

    } catch (error) {
      setLoading(false);
      setError("An error occurred while signing up.");
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center my-8 font-bold'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button disabled={loading}
          className='bg-blue-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading' : 'Sign up'}
        </button>
        {/* <OAuth /> */}
      </form>
      <div className='flex gap-2 mt-5 font-bold tracking-wide text-md bg-blue-50 bg-opacity-30 px-3'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-900'>Sign in</span>
        </Link>
      </div>
      {error && <p className='my-2 px-3 font-bold bg-blue-50 bg-opacity-90 text-red-600'>{error}</p>}
    </div>
  )
}
