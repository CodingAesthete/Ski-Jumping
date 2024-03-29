import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/')
    } catch (err) {
      dispatch(signInFailure(error.message));
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center my-8 font-bold'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        {/* <OAuth /> */}
      </form>
      <div className='flex gap-2 mt-5 font-bold tracking-wide text-md bg-blue-50 bg-opacity-90 px-3'>
        <p>No account?</p>
        <Link to={'/sign-up'}>
          <span className='text-red-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='px-3 my-2 font-bold bg-blue-50 bg-opacity-90 text-red-600'>{error}</p>}
    </div>
  )

}
