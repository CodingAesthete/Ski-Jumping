import React, { useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: ''
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(getStorage(app), `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          resolve(url);
        }).catch((error) => {
          console.error('Error getting download URL:', error);
          reject(error);
        });
      }).catch((error) => {
        console.error('Error uploading image:', error);
        reject(error);
      });
    });
  };

  const handleImageSubmit = (e) => {
    const file = e.target.files[0]; // Get the selected file from the input

    if (file) {
      setUploading(true);
      setImageUploadError(false);

      storeImage(file)
        .then((url) => {
          setFormData({
            ...formData,
            image: url, // Save the image URL in the formData state
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((error) => {
          console.error('Image upload failed:', error);
          setImageUploadError('Image upload failed');
          setUploading(false);
        });
    } else {
      setImageUploadError('Please select an image');
    }
  };

  useEffect(() => {
    const textarea = document.getElementById('description');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    const adjustTextareaHeight = () => {
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    textarea.addEventListener('input', adjustTextareaHeight);

    return () => {
      textarea.removeEventListener('input', adjustTextareaHeight);
    };
  }, []);

  const handleChange = (e) => {
    if (e.target.type === 'textarea') {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData, // Pass the formData
          userRef: currentUser._id,
          username: currentUser.username
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  return (
    <main className='p-6 mt-6 mx-auto sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[58rem] m-[1.5rem] bg-gray-100 bg-opacity-90 rounded-lg mb-8'>
      <h1 className='text-3xl font-semibold text-center mb-7'>
        Create a Post
      </h1>
      <form className='flex flex-col sm:flex-col gap-4 mb-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 flex-1'>
          <textarea
            type='text'
            placeholder='Title'
            className='border p-3 rounded-lg'
            id='title'
            rows="1"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg'
            id='description'
            required
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className='font-semibold'>Images:
            <span className='font-normal text-gray-600 ml-2'>Choose an image for your post.</span>
          </p>
          <div className="flex sm:flex-col md:flex-row gap-4">
            <input
              className='p-3 border border-gray-300 rounded w-full'
              type="file"
              id='images'
              accept='image/*'
              required
              onChange={handleImageSubmit}
            />
            <button
              className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
              type='button'
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
          {imageUploadError && (
            <p className="text-red-500">{imageUploadError}</p>
          )}
          {formData.image && (
            <img src={formData.image} alt="Uploaded" className="mt-2 max-w-[200px]" />
          )}
          <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Post</button>
        </div>
      </form>
    </main>
  );
}
