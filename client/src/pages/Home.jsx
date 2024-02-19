import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/PostItem';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/get');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className='max-w-[62rem] mx-auto min-h-[79.5vh] m-[1.5rem] bg-blue-100 bg-opacity-95 rounded-lg p-3 flex items-center flex-col mb-8 pb-6'>
      <header>
        <h1 className='font-bold text-3xl text-center italic font-custom tracking-wide text-violet-900 mt-2'>Newsfeed</h1>
      </header>
      <div className='mx-auto'>
        {posts && posts.length > 0 && posts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}