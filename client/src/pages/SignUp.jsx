import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center my-8 font-bold'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
        />

        <button
          className='bg-blue-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5 font-bold tracking-wide text-md bg-blue-50 bg-opacity-30 px-3'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-900'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
