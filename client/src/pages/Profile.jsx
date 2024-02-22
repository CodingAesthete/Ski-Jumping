import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import {
  updateUserStart, updateUserSuccess, updateUserFailure,
  deleteUserStart, deleteUserSuccess, deleteUserFailure, signInStart
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showPostsError, setShowPostsError] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`,
        { method: 'DELETE' });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (err) {
      dispatch(deleteUserFailure(err.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (err) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  const handleShowPosts = async () => {
    try {
      setShowPostsError(false);
      const res = await fetch(`/api/user/posts/${currentUser._id}`);
      const data = await res.json();
      console.log(data);

      setUserPosts(data);
    } catch (error) {
      setShowPostsError(true);
    }
  };

  const handleUsersDelete = async (postId) => {
    try {
      const res = await fetch(`/api/post/delete/${postId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserPosts((prev) =>
        prev.filter((post) => post._id !== postId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto 2xl:max-w-2xl'>
      <h1 className='text-3xl 2xl:text-5xl font-semibold text-center my-2 2xl:my-4'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 2xl:h-36 2xl:w-36' />
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700 bg-blue-50 bg-opacity-80'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700 bg-blue-50 bg-opacity-90 p-2 font-bold 2xl:text-lg'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700 bg-blue-50 bg-opacity-90 p-2 font-bold 2xl:text-lg'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>
        <input
          type="text"
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg 2xl:text-2xl 2xl:p-5'
          onChange={handleChange}
          defaultValue={currentUser.username} />
        <input
          type="email"
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg 2xl:text-2xl 2xl:p-5'
          onChange={handleChange}
          defaultValue={currentUser.email} />
        <input
          type="password"
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg 2xl:text-2xl 2xl:p-5'
          onChange={handleChange} />
        <button
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 mt-1 2xl:text-2xl 2xl:p-5'>{loading ? 'Loading...' : 'update'}</button>

      </form>
      <div className="w-3/4 p-3 sm:p-0 sm:w-full flex flex-col mx-auto text-center sm:text-start gap-3 sm:gap-0 sm:flex-row justify-between mt-7">
        <span
          onClick={handleDeleteUser}
          className='text-red-700 bg-blue-50 bg-opacity-60 text-md font-bold cursor-pointer px-2 py-1 2xl:text-2xl'>Delete account</span>
        <Link to={'/post'} className="bg-blue-50 bg-opacity-70 font-bold cursor-pointer px-2 py-1 text-green-800 2xl:text-2xl"
          style={{ letterSpacing: '2px' }}>
          Post
        </Link>
        <Link onClick={handleShowPosts} className=' bg-blue-50 bg-opacity-70 font-bold cursor-pointer px-2 py-1 text-green-800 2xl:text-2xl ' style={{ letterSpacing: '2px' }}>
          Blog
        </Link>
        <Link to={'/chat'} className="bg-blue-50 bg-opacity-70 font-bold cursor-pointer px-2 py-1 text-green-800 2xl:text-2xl"
          style={{ letterSpacing: '2px' }}>
          Message
        </Link>
        <span
          onClick={handleSignOut}
          className='text-blue-700 bg-blue-50 bg-opacity-60 text-md font-bold cursor-pointer px-2 py-1 2xl:text-2xl'>Sign out</span>
      </div>

      <p className='text-red-900 mt-5'>{error ? error : ''}</p>
      <p className='text-green-700 bg-blue-50 bg-opacity-60 px-2 font-bold mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>

      {userPosts && userPosts.length > 0 && (
        <div className='flex flex-col gap-4 bg-sky-100 bg-opacity-80 rounded-md pb-3'>
          <h1 className='text-center mt-4 text-2xl font-semibold'>
            Your Posts
          </h1>
          {userPosts.map((post) => (
            <div
              key={post._id}
              className='border rounded-lg p-2 flex justify-between items-center gap-6'
            >
              <Link >
                <img
                  src={post.image}
                  alt='listing cover'
                  className=' w-36 object-contain'
                />
              </Link>
              <Link
                className='text-slate-700 font-semibold  hover:underline truncate flex-1'
              > <p>{post.title}</p>
              </Link>
              <div className='flex flex-col item-center'>
                <button
                  onClick={() => handleUsersDelete(post._id)}
                  className='text-red-700 uppercase'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div >
  )
}

